import React from 'react'
import Me from '../Assets/face.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
 
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import IconButton from '@mui/material/IconButton';
import '../Components/Header.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PeopleIcon from '@mui/icons-material/People';
import HubIcon from '@mui/icons-material/Hub';
import SchoolIcon from '@mui/icons-material/School';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Header = () => {
  return (
    <div className='Header'>

        {/* left-part  */}
        <div> </div>
      <div className="header-left">
         
      
      {/* <div className="header-input">
      <SearchIcon fontSize='large'/> <input type="text" name="" id="" placeholder='Search Facebook' />
          
      </div> */}
      
      
      </div>

      {/* Center Part  */}
      <div className="header-center">
          <div className="header-option header-option-active">
           <HomeIcon  />
          </div>
          <div className="header-option">
          <PeopleIcon />
          </div>
          <div className="header-option">
                 <SchoolIcon  />
          </div>
          <div className="header-option">
               <ChatBubbleIcon  /> 
          </div>
          <div className="header-option">
  <HubIcon/>
          </div>
          
      </div>

{/* right part  */}
      <div className="header-right">
<div className="header-info">
<IconButton><Avatar src="/broken-image.jpg "  /></IconButton>
<h4>Aryan Tiwari</h4>
  <IconButton>   <AddIcon/> </IconButton>
  <IconButton>   <ForumIcon/> </IconButton>
  <IconButton>   <NotificationsActiveIcon/> </IconButton>
</div>
      </div>

    </div>
  )
}

export default Header

