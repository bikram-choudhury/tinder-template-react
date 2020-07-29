import React from 'react';
import Chat from '../Chat/Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="https://media.gettyimages.com/photos/mark-zuckerberg-chief-executive-officer-of-facebook-checks-his-phone-picture-id998115102"
            />
            <Chat
                name="Brad"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="https://media.gettyimages.com/photos/brad-pitt-and-jennifer-aniston-attend-the-26th-annual-screen-awards-picture-id1200626173"
            />
            <Chat
                name="Steve"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="https://media.gettyimages.com/photos/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-april-8-in-picture-id98328574"
            />
        </div>
    )
}

export default Chats
