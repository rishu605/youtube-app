import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

    const style = {
        display: "inline-block"
    };

    const videoListItem = props.videos.map((video) => {
        return (
            <VideoListItem style={style} key={video.id.videoId} video={video}
                           onVideoSelect={props.onVideoSelect}/>
        )
    });

    return (

        <div>
            <ul>
                {videoListItem}
            </ul>
        </div>

    );


};

export default VideoList;