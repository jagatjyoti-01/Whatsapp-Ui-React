// src/components/Chat.js
import React from 'react';
import './Chat.css';
import { MdVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { BsEmojiLaughing } from "react-icons/bs";
import { TbBrandAlpineJs } from "react-icons/tb";
import Avatar from '@mui/material/Avatar';


const Chat = ({ selectChat }) => {
    return (
        <div className="chat">
            <div className="chat__header">               
                <div className='jaga'  >
                    <Avatar  src={selectChat.link} />
                    <h2>{selectChat.name}</h2>
                </div>
            
                <div className='jaga'>
                    <div className='jyoti'>
                        <MdVideoCall style={{ fontSize: '24px', margin: '2px 10px', borderRight:"1px solid gray", paddingRight:"10px" }} />
                        <MdAddCall style={{ fontSize: '24px', margin: '2px 10px' }} />
                    </div>
                    <div>
                        <FaSearch style={{ fontSize: '24px', margin: '4px 10px',paddingTop:"8px",opacity:"0.7" }} />
                    </div>
                </div>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">
                <BsEmojiLaughing style={{ fontSize: '24px', margin: '4px 10px' }} />
                <TbBrandAlpineJs style={{ fontSize: '24px', margin: '4px 10px' }} />

                <input type="text" placeholder="Type a message" />

            </div>
        </div>
    );
}

export default Chat;
