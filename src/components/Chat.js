// src/components/Chat.js
import React from 'react';
import './Chat.css';
import { MdVideoCall } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import { TbBrandAlpineJs } from "react-icons/tb";


const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className='jaga'>
                    <h2><FaRegUserCircle style={{fontSize:'30px',margin:'0px 10px'}} /></h2>
                    <h2>Jagat jyoti</h2>
                </div>
                <div className='jaga'>
                    <div className='jyoti'>
                        <MdVideoCall style={{ fontSize: '24px', margin: '2px 10px' }} />
                        <MdAddCall style={{ fontSize: '24px', margin: '2px 10px' }} />
                    </div>
                    <div>
                        <FaSearch style={{ fontSize: '24px', margin: '4px 10px' }} />
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
