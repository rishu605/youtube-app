import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return (
            <p>Loading...</p>
        );
    }

    const url = "https://www.youtube.com/embed/" + props.video.id.videoId;
    const style = {
        width: "920px",
        height: "500px",
        marginTop: "24px",
        marginBottom: "24px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19)"
    };
    const styleh3 = {
        marginTop: "24px",
        marginBottom: "24px",
        paddingLeft: "18px",
        marginLeft: "18px",
        color: "white"

    };
    const style1 = {
        paddingLeft: "18px"
    };
    console.log("props" + props);
    return (
        <div>
            <div style={style1}>
                <iframe className={"img-thumbnail embed-responsive embed-responsive-16by9"}
                        allowFullScreen={"allowFullScreen"}
                        style={style}
                        src={url}/>
            </div>
            <div>
                <h1 style={styleh3}>{props.video.snippet.title}</h1>
                {/*<p>{props.video.snippet.description}</p>*/}
            </div>
        </div>
    );
}
export default VideoDetail;