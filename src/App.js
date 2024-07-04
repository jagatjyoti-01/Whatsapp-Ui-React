
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import ChatList from './components/ChatList';


const App = () => {
  const [chats] = useState([
    { name: 'jagat jyoti', lastMessage: 'Hey, how are you?' },
    { name: 'jyoti', lastMessage: 'Let\'s catch up soon!' },
    { name: 'Ram', lastMessage: 'Let\'s catch up soon!' },
    { name: 'Baba', lastMessage: 'Let\'s catch up soon!' },
    { name: 'Dipunu', lastMessage: 'Let\'s catch up soon!' },
    { name: 'Rahul', lastMessage: 'Let\'s catch up soon!' },
    { name: 'Suman', lastMessage: 'Let\'s catch up soon!' },
  ]);

 
  
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar>
          <ChatList chats={chats} onSelectChat={setSelectedChat} />
        </Sidebar>
  
          < Chat / >
            
    </div>
    </div >
  );
}

export default App;
