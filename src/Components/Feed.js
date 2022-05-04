import React from 'react'
import '../Components/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'


const Feed = () => {
  return (
    <div className='feed'>

      <MessageSender />
  <Post
  profilePic='https://media-exp1.licdn.com/dms/image/C5603AQE6lRHte5PuTQ/profile-displayphoto-shrink_400_400/0/1650129500742?e=1657152000&v=beta&t=3q4cQV40FGm3x71glWJwMcYJpB-qnqxgFd438MrNIDk'
  username='Aryan Tiwari'/>
    </div>
  )
}

export default Feed
