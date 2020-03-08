# mern-login-passport
Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

React and React Router for frontend
Express and Node for the backend
MongoDB for the database
Redux for state management between React components

# Configuration

set your database configuration config/dev.js for local developmenet.

module.exports = {
    mongodbURL: '',
    secretOrKey: "secret"
}

# Run the Application
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
