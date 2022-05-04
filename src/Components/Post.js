import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import '../Components/Post.css'
const Post = ({ profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className="post-top">
                <Avatar src={profilePic} className='post-avatar' />
                <div className="post-topinfo">
                    <h3>{username}</h3>
                    <p></p>

                    {/* image is comming later  */}
                   
                </div>

            </div>
            <div className="post-options">
                        <div className="post-option">
                            <ThumbUpIcon />
                            <p>Like</p>
                        </div>
                        <div className="post-option">
                            <ChatBubbleIcon />
                            <p>Comment</p>
                        </div>
                        <div className="post-option">
                            <NearMeIcon />
                            <p>Share</p>
                        </div>
                        <div className="post-option">

                        </div>
                    </div>
        </div>
    )
}

export default Post

