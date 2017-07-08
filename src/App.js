import React, { Component } from 'react';
//import logo from './logo.svg';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import Videodetail from './components/video_detail'


const API_KEY = "AIzaSyD5A0nJP10Z6WHn_ONcRObKIVPGMYJ3f6I";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {videos: []};

		YTSearch({key:API_KEY,term:'surfboards'}, (videos) =>{
			this.setState({ videos });
		})
	}
	render() {
		return (
			<div className="App">
			<SearchBar/>
			<Videodetail video={this.state.videos[0]}/>
			<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;
