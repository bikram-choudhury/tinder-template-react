import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/ChatScreen/ChatScreen';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />
            <Profile />
          </Route>
          <Route path="">
            <div className="wrapper">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
