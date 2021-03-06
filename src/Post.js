import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'

function Post({
    displayName, userName, verified , text, image, avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>{displayName} {" "}<span className="post__headerSpecial">
                        {verified && <VerifiedUser className="post__badge"/>}  @{userName}
                        </span>
                    
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>

                </div>
            </div>
            <img src={image} alt="pic"/>
            <div className="post__footer">
                <ChatBubbleOutline fontsize='small'/>
                <Repeat fontsize='small'/>
                <FavoriteBorder fontsize='small'/>
                <Publish fontsize='small'/>
            </div>
        </div>

        </div>
    )
}

export default Post
