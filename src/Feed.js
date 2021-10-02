import React,{useState,useEffect} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
// import db from './firebase.js'
// import { collection, query, where, onSnapshot } from "firebase/firestore";


function Feed() {
    // const [posts,setPosts] = useState([]);
    

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot =>(
    //         setPosts(snapshot.docs.map(doc=> doc.data()))
    //     ))
        
    // }, []);
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            


            {/* TweetBox */}
            <TweetBox />
            {/* passed props */}
            <Post 
                    displayName="Kumar"
                    userName='kkk'
                    verified={true}
                    text="you cool?"
                    avatar="https://1.bp.blogspot.com/-Ka2KnhqvMD4/XsgcVpDxkeI/AAAAAAAAVGg/myxTZ4gxausE83NlcF_bb7XlHiqSdWbjgCLcBGAsYHQ/s1600/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252817%2529.jpg"
                    image="https://1.bp.blogspot.com/-Ka2KnhqvMD4/XsgcVpDxkeI/AAAAAAAAVGg/myxTZ4gxausE83NlcF_bb7XlHiqSdWbjgCLcBGAsYHQ/s1600/whatsapp%2Bdp%2Bimages%2Bfor%2Bboys%2B%252817%2529.jpg"
        
                    />


            {/* {posts.map(post =>{
                    <Post 
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
        
                    />
            })}
             */}
            
            
        </div>
    )
}

export default Feed
