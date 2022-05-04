import React from 'react'
import '../Components/Sidebar.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'; 
import SidebarRow from './SidebarRow';
import HubIcon from '@mui/icons-material/Hub';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const Sidebar = () => {
  return (
    <div >
      <SidebarRow title="Aryan"/>
      <SidebarRow Icon={HubIcon} title="Connections  "/>
      <SidebarRow Icon={SchoolIcon} title="Acadmics"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatBubbleIcon} title="Global Chat"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More"/>

    </div>
  )
}

export default Sidebar
