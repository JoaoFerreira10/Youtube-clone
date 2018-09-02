import React from 'react';
import VideoListItem from './video_list_item.js';


const VideoList = (videos) => {


    const videoItems = prompt.videos.map( video => {
        return <VideoListItem key={video.etag} video={video}/>
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;