// src/components/SidebarHeader.js
import React from 'react';
import './SidebarHeader.css';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

import { CiSettings } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { BsChatText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";


const SidebarHeader = () => {
  return (
    <div className="sidebarHeader">
      <div className="sidebarHeader__icons">
      
      <IconButton>
      <HiMiniBars3 />
        </IconButton>
        

        <IconButton>
          <DonutLargeIcon />
        </IconButton>

        <IconButton>
          <BsChatText />
        </IconButton>

        <IconButton>
          <IoCallOutline />
        </IconButton>

      </div>
      <div>
      <IconButton>
        <CiStar />
        </IconButton>

        <IconButton>
        <FiShoppingBag />
        </IconButton>
        <hr></hr>
        <IconButton>
        <CiSettings />
        </IconButton>
        
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&s" style={{border:"2px solid gray"}} />
      </div>
    </div>
  );
};

export default SidebarHeader;
