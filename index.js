import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.port || 3000;


app.use(morgan("dev")); 
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


let userIsLoggedIn = false;

let posts = []; // This is where we will store our blog posts

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/blog", (req, res) => {
    res.render("blog", { posts });
});

app.get("/dashboard", (req, res) => {
    if (!userIsLoggedIn) {
        res.redirect("/login");
    } else {
        
        res.render("dashboard", { posts });
    }
});


// Single post route
app.get("/post/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        return res.status(404).send("Post not found");
    }
    
    res.render("post", { post });
});

app.get("/login", (req, res) => {
    res.render("auth/login");
});

app.post("/login", (req, res) => {

    if (req.body.email === process.env.ADMIN_EMAIL && 
        req.body.password === process.env.ADMIN_PASSWORD) {

        userIsLoggedIn = true;

        res.redirect("/dashboard");
        console.log("Login successful");

    } else {

        res.render("auth/login");
    }    

});
    

app.get("/compose", (req, res) => {
    if (!userIsLoggedIn) {
        return res.redirect("/login")
    } else {
        res.render("admin/compose");
    }
});

// Add post route
app.post("/add-post", upload.single("image"), (req, res) => {
    
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        image: req.file ? req.file.filename : "default.jpg", // THIS is the key
        hook: req.body.hook,
        section1Title: req.body.section1Title,
        section1Content: req.body.section1Content,
        section2Title: req.body.section2Title,
        section2Content: req.body.section2Content
    };
    
    posts.push(newPost);
    
    res.redirect("/blog");
});

// Edit post routes
app.get("/edit/:id", (req, res) => {
  if (!userIsLoggedIn) {
    return res.redirect("/login");
  }

  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id == postId);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("admin/edit-post", { post });
});

app.post("/edit/:id", (req, res) => {
  if (!userIsLoggedIn) {
    return res.redirect("/login");
  }

  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id == postId);

  if (!post) {
    return res.send("Post not found");
  }

  // Update values
  post.title = req.body.title;
  post.hook = req.body.hook;
  post.section1Title = req.body.section1Title;
  post.section1Content = req.body.section1Content;
  post.section2Title = req.body.section2Title;
  post.section2Content = req.body.section2Content;

  res.redirect("/dashboard"); // go back to dashboard
});


// Delete post routes
app.get("/delete-post", (req, res) => {
  if (!userIsLoggedIn) {
    return res.redirect("/login");
  }

  res.render("admin/delete-post", { posts });
});

app.post("/delete/:id", (req, res) => {
      if (!userIsLoggedIn) {
    return res.redirect("/login");
  }

    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);

  res.redirect("/dashboard");
});

 app.listen(port, console.log(`Server running on http://localhost:${port}`));