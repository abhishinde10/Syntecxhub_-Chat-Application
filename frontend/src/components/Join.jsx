import React from 'react';

const Join = ({ username, setUsername, room, setRoom, joinRoom }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className="join-container">
      <div className="join-card">
        <div className="join-header">
          <div className="logo-icon">💬</div>
          <h1>Join a Chat</h1>
          <p>Enter your details to start chatting</p>
        </div>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="input-group">
          <label>Room ID</label>
          <input
            type="text"
            placeholder="e.g. general"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button onClick={joinRoom} className="join-btn">
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Join;
