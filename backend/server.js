const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);

const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

const io = new Server(server, {
    cors: {
        origin: [clientUrl, "http://localhost:5173"],
        methods: ["GET", "POST"],
    },
});

connectDB();

app.use(cors({
    origin: [clientUrl, "http://localhost:5173"],
    methods: ["GET", "POST"]
}));
app.use(express.json());

// Basic API route
app.get('/', (req, res) => {
    res.send('Chat API is running');
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join_room", async (data) => {
        const { username, room } = data;
        socket.join(room);
        console.log(`User ${username} joined room: ${room}`);

        try {
            // Fetch previous messages for the room (limit to 100)
            const previousMessages = await Message.find({ room }).sort({ createdAt: 1 }).limit(100);
            socket.emit("previous_messages", previousMessages);
            
            // Notify others in the room
            socket.to(room).emit("receive_message", {
                username: "System",
                room: room,
                text: `${username} has joined the chat`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    });

    socket.on("send_message", async (data) => {
        try {
            const message = new Message(data);
            await message.save();

            io.to(data.room).emit("receive_message", data);
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));