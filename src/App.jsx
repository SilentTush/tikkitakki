import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
	return (
		<div className="app">
			<h1 className="tik">TikkiTakki</h1>
			<div className="app_videos">
				<Video />
			</div>
		</div>
	);
}

export default App;
