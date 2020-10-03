import React, { useRef, useState } from "react";
import "./Video.css";

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
				src="https://cdn.videvo.net/videvo_files/video/free/2015-08/originalContent/raininglettersBW.mp4"
			></video>
		</div>
	);
}

export default Video;
