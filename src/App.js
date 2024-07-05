import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import SidebarHeader from './components/SidebarHeader';
import { BsWhatsapp } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';



const App = () => {
  const [chats] = useState([
    { name: 'jagat jyoti', lastMessage: 'Hey, how are you?', link: "data:image/jpeg;base64,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" },
    { name: 'jyoti', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGsNv23K5shKblMsKePA8o6M2kqBH39PZqA&s" },
    { name: 'Baba', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&s" },
    { name: 'Dipunu', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" },
    { name: 'Rahul', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog6epfJWr_aK4Q5m5o6OYOGoJAHZMpky4mA&s" },
    { name: 'Suman', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&s" },
    { name: 'Suman', lastMessage: 'Let\'s catch up soon!', link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog6epfJWr_aK4Q5m5o6OYOGoJAHZMpky4mA&s" },
  ]);

  const [selectChat, setselectChat] = useState(chats[0])
  return (
    <div>
      <div className='toppage'>
        <IconButton>
          <BsWhatsapp style={{ color: "green" }} />
        </IconButton>
        <span style={{paddingTop:"8px"}}>Whatsapp</span>
      </div>
      <div className="app">
        <div className="app__body">
          < SidebarHeader />

          <Sidebar>
            <ChatList chats={chats} onselect={setselectChat} />
          </Sidebar>
          < Chat selectChat={selectChat} />

        </div>
      </div >
    </div>
  );
}

export default App;
