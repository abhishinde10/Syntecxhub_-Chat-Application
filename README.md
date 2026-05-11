# Real-Time MERN Chat Application

A full-stack, real-time messaging web application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. This application allows multiple users to join specific chat rooms and instantly communicate with one another in a responsive, modern interface.

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://syntecxhub-chat-application-drab.vercel.app](https://syntecxhub-chat-application-drab.vercel.app)
- **Backend API (Render)**: [https://syntecxhub-chat-application-ys9s.onrender.com](https://syntecxhub-chat-application-ys9s.onrender.com)

---

## 🛠️ Tech Stack

**Frontend**
- React 18
- Vite
- Socket.io-client
- CSS3 (Vanilla)

**Backend**
- Node.js & Express.js
- Socket.io
- MongoDB Atlas & Mongoose
- CORS & dotenv

---

## ✨ Features

- **Real-Time Communication**: Instant messaging powered by Socket.io without page reloads.
- **Room-Based Chat**: Join specific rooms to chat securely with a subset of users.
- **Message History Persistence**: All messages are securely saved to a MongoDB Atlas cluster and automatically retrieved upon rejoining the room.
- **System Notifications**: Broadcasts automated system alerts when users join or leave rooms.
- **Responsive UI**: A modern, clean user interface designed for both desktop and mobile screens.

---

## 💻 Local Setup Instructions

Follow these steps to run the application locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB Atlas cluster (or local MongoDB)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Syntecxhub_Chat_Application.git
cd Syntecxhub_Chat_Application
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:
```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the Vite development server:
```bash
npm run dev
```

---

## 🌐 Production Deployment Guide

### Deploying the Backend (Render)
1. Push this repository to GitHub.
2. Go to **Render.com** and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the following details:
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add your Environment Variables under the "Environment" tab:
   - `MONGO_URI`: Your MongoDB Connection String.
   - `CLIENT_URL`: The Vercel URL of your frontend (add this after you deploy the frontend).
6. Click **Deploy**.

### Deploying the Frontend (Vercel)
1. Go to **Vercel.com** and click **Add New Project**.
2. Import your GitHub repository.
3. Edit the **Framework Preset** if needed (should auto-detect **Vite**).
4. Set the **Root Directory** to `frontend`.
5. Add the Environment Variable:
   - `VITE_BACKEND_URL`: Your live Render backend URL (e.g., `https://your-backend-url.onrender.com`).
6. Click **Deploy**.

---

## 📸 Screenshots

*(Replace these with your actual application screenshots after deployment)*

- **Join Room Screen**: `![Join Screen](./frontend/public/join-screen.png)`
- **Active Chat Room**: `![Chat Room](./frontend/public/chat-screen.png)`

---

## 🤝 Contribution & License
This project was built for educational and portfolio purposes. Feel free to fork and customize!

**Author:** [Your Name]
**License:** MIT
