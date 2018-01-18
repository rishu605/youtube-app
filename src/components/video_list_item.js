import React, {Component} from 'react';


const VideoListItem = (props) => {
    const video = props.video;
    const style = {
        color: "white",
        fontSize: "24px",
        fontFamily: "Verdana",
        // marginLeft:"25px"
        marginTop: "24px",
        marginBottom: "24px"
    };
    const style1 = {
        borderRadius: "15px",
        // margin:auto
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19)",
        height: "100px",
        width: "170px"
        // opacity: 1
    };
    const style2 = {
        display: "block"
    };


    return (
        <div style={style2} onClick={() => {
            props.onVideoSelect(video)
        }}>
            <div style={style2}>

                <strong>
                    <div style={style}>{video.snippet.title}</div>
                </strong>
                <img className={"img-thumbnail"}
                     style={style1}
                     src={video.snippet.thumbnails.default.url}/>
            </div>
        </div>
    );

};

export default VideoListItem;