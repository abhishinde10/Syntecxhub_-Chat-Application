# Real-Time Chat Application 💬

A complete, production-ready real-time Chat Application built with the MERN stack and Socket.io. Features a modern, responsive UI reminiscent of Discord and WhatsApp.

## Features ✨

- **User Join System**: Simple and fast entry with just a username and room ID.
- **Real-Time Messaging**: Instant message delivery using WebSocket technology (Socket.io).
- **Chat Rooms**: Messages are isolated and broadcasted only within specific rooms.
- **Persistent Storage**: All messages are securely saved to MongoDB.
- **Chat History**: When joining a room, previous messages are automatically fetched and displayed.
- **Modern UI**: Dark mode, glassmorphism elements, CSS variables, and smooth animations.
- **Responsive Design**: Fully functional and beautiful on both mobile and desktop devices.
- **Auto-scroll**: The chat interface automatically scrolls down when new messages arrive.
- **System Messages**: Notifications when users join the chat room.

## Tech Stack 🛠️

- **Frontend**: React.js, Vite, pure CSS, Socket.io-client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB (Mongoose)
- **Deployment Ready**: Configured for deployment on Vercel (Frontend) and Render (Backend)

## Project Structure 📁

```text
chat-app/
├── backend/
│   ├── config/
│   │   └── db.js         # MongoDB connection setup
│   ├── models/
│   │   └── Message.js    # Mongoose schema for messages
│   ├── server.js         # Express and Socket.io server
│   ├── package.json
│   └── .env              # Environment variables (MONGO_URI, PORT)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Join.jsx  # Room join interface
│   │   │   └── Chat.jsx  # Main chat interface
│   │   ├── App.jsx       # Root component & state management
│   │   ├── App.css       # Empty (styles handled in index.css)
│   │   ├── index.css     # Global styles & design system
│   │   └── main.jsx      # React entry point
│   ├── package.json
│   ├── vite.config.js
│   └── .env              # Environment variables (VITE_BACKEND_URL)
└── README.md
```

## Setup & Local Development 🚀

### 1. Prerequisites
- Node.js installed
- A MongoDB URI (local or MongoDB Atlas)

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Start the server:
```bash
npm run dev
# or
node server.js
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` folder (optional for local dev if backend is on port 5000):
```env
VITE_BACKEND_URL=http://localhost:5000
```
Start the frontend app:
```bash
npm run dev
```

### 4. Open in Browser
Visit the URL provided by Vite (usually `http://localhost:5173`). Open multiple tabs or different browsers to test the real-time chat functionality!

## Deployment 🌐
- **Backend**: Deploy the `backend` folder to a service like Render or Heroku. Remember to set the `MONGO_URI` environment variable in the host's dashboard.
- **Frontend**: Deploy the `frontend` folder to Vercel or Netlify. Set `VITE_BACKEND_URL` to your live backend URL in the host's dashboard.
