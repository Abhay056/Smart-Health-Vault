# Smart Health Vault - Full Stack Application

A full-stack web application for managing health records and information.

## Project Structure
```
smart-health-vault/
├── frontend/           # React frontend application
├── backend/            # Node.js backend server
└── README.md          # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the backend directory with the following content:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smart-health-vault
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```bash
npm start
```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at http://localhost:3000

## Features

- User authentication (Register/Login)
- Dashboard with health information
- Contact form
- Health insights
- Secure data storage

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - Axios
  - Material-UI

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication

## API Documentation

### Authentication Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/profile - Get user profile (Protected route)

### Health Data Endpoints

- GET /api/health/dashboard - Get dashboard data
- GET /api/health/insights - Get health insights
- POST /api/contact - Submit contact form 