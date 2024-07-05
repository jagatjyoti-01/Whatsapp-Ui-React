// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
//import SidebarHeader from './SidebarHeader';
import { PiNotePencilThin } from "react-icons/pi";
import IconButton from '@mui/material/IconButton';
import { FiBarChart } from "react-icons/fi";


const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <div className='dash'>
        <h2 style={{marginLeft:"12px"}} >Chats</h2>
        <div className='dash'>

        <IconButton>
        <PiNotePencilThin />
        </IconButton>

        <IconButton>
        <FiBarChart />
        </IconButton>

        </div>
       </div>
      <div className="sidebar__search">
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <div className="sidebar__chats">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
