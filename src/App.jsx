import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
	return (
		<div className="app">
			<h1>TikkiTakki</h1>
			<div className="app_videos">
				<Video />
				<Video />
			</div>
		</div>
	);
}

export default App;
