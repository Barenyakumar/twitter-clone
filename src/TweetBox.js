import React from 'react'
import "./TweetBox.css"
import { Button,Avatar } from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1510552776732-03e61cf4b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
                    <input placeholder="what's happening ?" type='text' />
                    
                    
                    

                </div>
                <input className='tweetBox__imageInput' placeholder="optional  Enter Image URL" type='text' />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
