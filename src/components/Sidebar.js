// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import SidebarHeader from './SidebarHeader';

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <SidebarHeader />
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
