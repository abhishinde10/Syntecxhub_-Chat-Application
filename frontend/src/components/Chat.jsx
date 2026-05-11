import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    socket.on('previous_messages', (messages) => {
      setMessageList(messages);
    });

    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.off('previous_messages');
      socket.off('receive_message');
    };
  }, [socket]);

  useEffect(() => {
    // Auto-scroll to bottom
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messageList]);

  const sendMessage = async () => {
    if (currentMessage.trim() !== '') {
      const messageData = {
        room: room,
        username: username,
        text: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="header-info">
          <div className="room-icon">#</div>
          <div>
            <h2>{room}</h2>
            <span className="online-status">● Online</span>
          </div>
        </div>
        <div className="user-badge">
          <div className="avatar">{username.charAt(0).toUpperCase()}</div>
          <span>{username}</span>
        </div>
      </div>
      
      <div className="chat-body" ref={chatBodyRef}>
        {messageList.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👋</div>
            <p>No messages yet. Be the first to say hi!</p>
          </div>
        ) : (
          messageList.map((messageContent, index) => {
            const isSystem = messageContent.username === 'System';
            const isMe = username === messageContent.username;

            if (isSystem) {
              return (
                <div key={index} className="message system-message">
                  <span className="system-text">{messageContent.text}</span>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`message ${isMe ? 'my-message' : 'other-message'}`}
              >
                {!isMe && (
                  <div className="message-avatar">
                    {messageContent.username.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="message-bubble">
                  <div className="message-content">
                    <p>{messageContent.text}</p>
                  </div>
                  <div className="message-meta">
                    <span className="author">{isMe ? 'You' : messageContent.username}</span>
                    <span className="time">{messageContent.time}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="chat-footer">
        <div className="input-wrapper">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type a message..."
            onChange={(event) => setCurrentMessage(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage} className="send-btn" disabled={currentMessage.trim() === ''}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
