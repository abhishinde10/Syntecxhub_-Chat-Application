import { useState } from 'react';
import { io } from 'socket.io-client';
import Join from './components/Join';
import Chat from './components/Chat';
import './App.css';

// Using import.meta.env for Vite environment variables
const socket = io(import.meta.env.VITE_API_URL);

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username.trim() !== '' && room.trim() !== '') {
      socket.emit('join_room', { username, room });
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <Join 
          username={username} 
          setUsername={setUsername} 
          room={room} 
          setRoom={setRoom} 
          joinRoom={joinRoom} 
        />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
