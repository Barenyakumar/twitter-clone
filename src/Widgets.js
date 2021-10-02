import React from 'react'
import "./Widgets.css"
import{
    TwitterTimelineEmbed, TwitterShareButton , TwitterTweetEmbed,
} from "react-twitter-embed"
import Search from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className='widgets__SearchIcon'/>
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>what's happening</h2>
                <TwitterTweetEmbed tweetId={'858551177860055040'}/>
                <TwitterTimelineEmbed sourceType='profile' screenName='Barenya' options={{height:400}} />
                <TwitterShareButton url={"https://www.facebook.com/barenyakumar/"} options={{text: "react is cool", via:"barenya"}}/>
            </div>
           
        </div>
    )
}

export default Widgets
