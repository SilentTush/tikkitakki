import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar.jsx";

function Video() {
	const videoRef = useRef(null);
	const [isPlaying, setIsplaying] = useState(false);

	function handleVideoClick() {
		if (isPlaying) {
			videoRef.current.pause();
			setIsplaying(false);
		} else {
			videoRef.current.play();
			setIsplaying(true);
		}
	}

	return (
		<div className="video">
			<video
				onClick={handleVideoClick}
				ref={videoRef}
				className="video_player"
				src="https://vod-progressive.akamaized.net/exp=1601756420~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1873%2F18%2F459368883%2F2030496550.mp4~hmac=9d287c1a9f7de8f3bdcefc657759518332fcd336ddefb1c7e1ce1fd59a79f888/vimeo-prod-skyfire-std-us/01/1873/18/459368883/2030496550.mp4?download=1&filename=pexels-polina-tankilevitch-5385878.mp4"
			></video>

			<VideoFooter />

			<VideoSideBar />
		</div>
	);
}

export default Video;
