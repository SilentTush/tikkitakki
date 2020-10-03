import React from "react";
import "./VideoSB.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

function VideoSideBar() {
	return (
		<div classsName="videoSidebar">
			<div className="likeButton vb">
				<FavoriteBorderIcon fontSize="large" />
				<p>100</p>
			</div>
			<div className="commentButton vb">
				<CommentIcon fontSize="large" />
				<p>100</p>
			</div>
			<div className="shareButton vb">
				<ShareIcon fontSize="large" />
				<p>100</p>
			</div>
		</div>
	);
}

export default VideoSideBar;
