import React, { useState } from 'react';
import Chat from './Chat';
import style from './App.module.css'
const App = () => {
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [joined, setJoined] = useState(false);

    const joinRoom = () => {
        if (username && roomName) {
            setJoined(true);
        }
    };

    return (
        <div className={style.appcontainer}>
            {!joined ? (
                <div className={style.joiroomcontainer}>
                    <h2>Welcome to our Chat App!</h2>
                    <p>
                        Our chat app allows you to join a chat room and communicate with other users in real-time. Here’s how you can get started:
                    </p>
                    <ol>
                        <li>Enter your username and room name.</li>
                        <li>Click "Join Room" to enter the chat room.</li>
                        <li>Start chatting with others in the room.</li>
                    </ol>
                    <input
                        className={style.inputfield}
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        className={style.inputfield}
                        type="text"
                        placeholder="Enter room name"
                        value={roomName}
                        onChange={e => setRoomName(e.target.value)}
                    />
                    <button className={style.joinbutton} onClick={joinRoom}>Join Room</button>
                </div>
            ) : (
                <Chat username={username} roomName={roomName} />
            )}
        </div>
    );
};

export default App;

