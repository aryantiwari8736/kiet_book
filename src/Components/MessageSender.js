import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import '../Components/MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
const MessageSender = () => {
    const [input,setInput] = useState('')
    const [image,setImage] = useState('')

    const handlechange = (e) =>{
        if(e.target.files[0] ){
            setImage(e.target.files[0])
        }
    }
    const handlesubmit = (e) =>{
        console.log('Submit Now');
    }
  return (
    <div className='messageSender'>
      <div className="messagesender-top">
      <Avatar alt="Remy Sharp" src='https://media-exp1.licdn.com/dms/image/C5603AQE6lRHte5PuTQ/profile-displayphoto-shrink_800_800/0/1650129500742?e=1657152000&v=beta&t=SeSD7SsqRBt6r9sOYWCi4Dhv_z1ortabaviVWHn_EMk ' className='' />
      <form action="">
          <input type="text" className='messagesender-input' placeholder='What is in your mind' value={input} onChange = {(e) => setInput(e.target.value)}/> 
          <input type="file" className = 'messagesender-fileselector' onChange = {handlechange} name="" id="" />
          <button onClick={handlesubmit} type='submit' className='btn'>Hidden Submit </button>  
      </form>
      </div>

      <div className="messagesender-bottom">
        <div className="messagesender-option"><VideocamIcon /><h3 className='tex'>Live Video</h3></div>
        <div className="messagesender-option"><PhotoLibraryIcon/><h3 className='tex'>Photo /Video</h3></div>
        <div className="messagesender-option"><InsertEmoticonIcon/><h3 className='tex's>Feeling/Activity</h3></div>
      </div>
    </div>
  )
}

export default MessageSender
