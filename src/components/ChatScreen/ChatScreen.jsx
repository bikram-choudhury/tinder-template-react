import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Brad',
            image: 'https://media.gettyimages.com/photos/brad-pitt-and-jennifer-aniston-attend-the-26th-annual-screen-awards-picture-id1200626173',
            message: 'whats up'
        },
        {
            name: 'Brad',
            image: 'https://media.gettyimages.com/photos/brad-pitt-and-jennifer-aniston-attend-the-26th-annual-screen-awards-picture-id1200626173',
            message: 'How it is going'
        },
        {
            message: 'Hi Brad'
        }
    ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH BRAD 10/08/20
            </p>
            {
                messages.map(msg => (
                    msg.name ? (
                        <div className="chatScreen_message">
                            <Avatar
                                className="chatScreen__image"
                                alt={msg.name}
                                src={msg.image}
                            />
                            <p className="chatScreen__text">{msg.message}</p>
                        </div>
                    ) : (
                            <div className="chatScreen_message">
                                <p className="chatScreen__textUser">{msg.message}</p>
                            </div>
                        )
                ))
            }
            <form className="chatScreen__input">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    className="chatScreen__inputField"
                />
                <button
                    className="chatScreen__inputButton"
                    onClick={handleSend}
                >SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
