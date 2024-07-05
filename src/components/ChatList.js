import React from 'react';
import './ChatList.css';
import Avatar from '@mui/material/Avatar';

const ChatList = ({ chats,onselect }) => {
  return (
    <div className="chatList">
      {chats.map((chat, index) => (
        <div key={index} className="chatList__item" onClick={()=>onselect(chat)} >
          <Avatar src={chat.link} style={{border:"2px solid gray"}} />
          <div className="chatList__info">
            <div className="chatList__itemName">{chat.name}</div>
            <div className="chatList__itemLastMessage">{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
