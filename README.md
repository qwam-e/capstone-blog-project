# Blog Project

A simple and elegant blog application built with Node.js and Express. This project includes features for viewing blog posts, user authentication, and an admin dashboard for managing content.

## Features

- **Home & About Pages**: Static pages for the blog
- **Blog Posts**: View and read blog posts
- **Contact Page**: Contact form for visitors
- **User Authentication**: Login functionality for admin users
- **Admin Dashboard**: Create, edit, and manage blog posts
- **File Uploads**: Upload images for blog posts
- **Responsive Design**: Mobile-friendly styling

## Quick Start (After Cloning)

Get the server running in 4 simple steps:

```bash
# 1. Navigate to the project directory
cd "Blog Project"

# 2. Install all dependencies
npm install

# 3. Create .env file with your configuration
echo 'port=3000
ADMIN_EMAIL="your-email@example.com"
ADMIN_PASSWORD="your-password"' > .env

# 4. Start the development server
npm start
```

Your blog will be running at **http://localhost:3000** ✨

## Tech Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Middleware**: 
  - Morgan (HTTP request logger)
  - Body-parser (request body parser)
  - Multer (file upload handler)
- **Environment**: dotenv (environment variable management)
- **Development**: Nodemon (auto-restart on file changes)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for cloning from GitHub)

### Setup Steps After Cloning from GitHub

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Blog Project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install all required packages:
   - Express.js
   - EJS
   - Morgan
   - Body-parser
   - Multer
   - Dotenv

3. **Create a `.env` file in the root directory:**
   ```bash
   # Copy if a sample .env.example exists, or create manually
   touch .env
   ```
   Add the following configuration:
   ```env
   port=3000
   ADMIN_EMAIL="your-email@example.com"
   ADMIN_PASSWORD="your-password"
   ```

## Running the Project

### Start the Development Server

```bash
npm start
```

This command will:
- Start the Express server using Nodemon
- Run on `http://localhost:3000` (or the port specified in your `.env` file)
- Automatically restart the server when you make changes to your code

### Access the Application

Once the server is running, open your browser and navigate to:
- **Home Page**: [http://localhost:3000/](http://localhost:3000/)
- **About**: [http://localhost:3000/about](http://localhost:3000/about)
- **Blog**: [http://localhost:3000/blog](http://localhost:3000/blog)
- **Contact**: [http://localhost:3000/contact](http://localhost:3000/contact)
- **Login**: [http://localhost:3000/login](http://localhost:3000/login)
- **Dashboard** (Admin): [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Project Structure

```
Blog Project/
├── index.js                 # Main server entry point
├── package.json             # Project dependencies and scripts
├── README.md               # This file
├── public/                 # Static files
│   ├── images/            # Image assets
│   ├── styles/            # CSS stylesheets
│   │   ├── blog.css
│   │   ├── dashboard.css
│   │   ├── footer.css
│   │   ├── login.css
│   │   ├── main.css
│   │   └── navbar.css
│   └── uploads/           # User-uploaded files
└── views/                  # EJS templates
    ├── index.ejs          # Home page
    ├── about.ejs          # About page
    ├── blog.ejs           # Blog listing page
    ├── contact.ejs        # Contact page
    ├── post.ejs           # Individual post view
    ├── admin/             # Admin templates
    │   ├── compose.ejs    # Create new post
    │   └── edit-post.ejs  # Edit existing post
    ├── auth/              # Authentication templates
    │   └── login.ejs      # Login page
    └── partials/          # Reusable components
        ├── navbar.ejs     # Navigation bar
        ├── admin_nav.ejs  # Admin navigation
        └── footer.ejs     # Footer
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server with Nodemon |
| `npm test` | Run tests (not yet configured) |

## Port Configuration

By default, the server runs on **port 3000**. To use a different port:

**Option 1: Set environment variable via `.env` file**
```
port=5000
```

**Option 2: Set environment variable via terminal**
```bash
# Linux/Mac
export port=5000 && npm start

# Windows (Command Prompt)
set port=5000 && npm start

# Windows (PowerShell)
$env:port=5000; npm start
```

## Environment Variables

Create a `.env` file in the root directory to configure:

```env
port=3000
ADMIN_EMAIL = "your-email@example.com"
ADMIN_PASSWORD = "your-password"
```

**Variables:**
- `port` - Server port (default: 3000)
- `ADMIN_EMAIL` - Email for admin login
- `ADMIN_PASSWORD` - Password for admin login

> **Note:** Authentication is currently hardcoded. Update these values in the `.env` file to use your desired credentials.

## Notes

- **Nodemon** is included for development: automatically restarts the server when you save file changes
- **Morgan** logs all HTTP requests in the console
- **Multer** handles file uploads and stores them in `public/uploads/`
- Templates use **EJS** for dynamic content rendering

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, either:
1. Stop the process using that port
2. Set a different port in your `.env` file

### Dependencies Not Installing
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Nodemon Not Working
Make sure Nodemon is installed globally or locally:
```bash
npm install
```

## License

ISC

## Author

Shey
