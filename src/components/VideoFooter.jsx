import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter() {
	return (
		<div className="videoFooter">
			<div className="videoFooter_text">
				<h3>@silent</h3>
				<p>HEllo this is description</p>
				<div className="videoTicker_main">
					<MusicNoteIcon className="footerIcon" />
					<Ticker mode="smooth">
						{({ index }) => (
							<>
								<p> my name is song</p>
							</>
						)}
					</Ticker>
					<img
						className="footerAlbum"
						src="http://pngimg.com/uploads/vinyl/vinyl_PNG101.png"
						alt="x"
					/>
				</div>
			</div>
		</div>
	);
}

export default VideoFooter;
