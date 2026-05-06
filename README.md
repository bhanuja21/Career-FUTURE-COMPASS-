# Career App

A full-stack web application designed for career management. This project features user authentication, a category-based browsing system, and is built using the MERN stack (MongoDB, Express.js, Node.js) with Firebase and JWT for secure authentication.

## 🚀 Tech Stack

- **Frontend:** HTML, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT), Firebase Admin
- **Other Utilities:** CORS, dotenv

## 📁 Project Structure

```text
Career-main/
│
├── public/                 # Frontend views and client-side scripts
│   ├── category.html       # Category page view
│   ├── category.js         # Category page logic
│   ├── login.html          # User login view
│   └── login.js            # User login logic
│
├── models/                 # Database schema models
│   └── userModel.js        # Mongoose schema for Users
│
├── routes/                 # API Route definitions
│   └── userRoutes.js       # Routes for user-related operations
│
├── Downloads/              # Reference and project overview materials
│   ├── FSD project overview .mp4
│   └── FSD_Frontend.mp4
│
├── authController.js       # Controller for authentication logic
├── database.js             # MongoDB connection setup
├── server.js               # Main application entry point
├── userRoutes.js           # Additional user routes configuration
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd Career-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the necessary configuration details (e.g., `PORT`, `MONGO_URI`, JWT secrets, or Firebase credentials).

4. **Start the server:**
   ```bash
   node server.js
   ```

5. **Access the application:**
   Open a browser and go to `http://localhost:<PORT>` to view the application.

## 🔗 Project Links

- **Codes:** [Google Drive Link](https://drive.google.com/file/d/1gZXfqtI_Nr7kbyzGIxnjN1DYyW_kC5qh/view?usp=sharing)
- **Overview:** [Google Drive Link](https://drive.google.com/file/d/13aqgyFwHfJjoGW59qwkiYREVzMAT1d5K/view?usp=sharing)
