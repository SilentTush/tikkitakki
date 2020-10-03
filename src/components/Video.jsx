import React from "react";
import "./Video.css";

function Video() {
	return (
		<div className="Video">
			<div className="video_player">
				<video src="https://vod-progressive.akamaized.net/exp=1601744410~acl=%2A%2F1224524886.mp4%2A~hmac=75767de5ce674b34508958d4b06beb93a87a5660a456f2116ee7d97031b2870d/vimeo-prod-skyfire-std-us/01/3301/12/316506213/1224524886.mp4?download=1&filename=Pexels+Videos+1893623.mp4"></video>
			</div>
		</div>
	);
}

export default Video;
