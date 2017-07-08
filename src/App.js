import React, { Component } from 'react';
//import logo from './logo.svg';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import Videodetail from './components/video_detail'
import _ from 'lodash';


const API_KEY = "AIzaSyD5A0nJP10Z6WHn_ONcRObKIVPGMYJ3f6I";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo:null
		};
		this.videoSearch("searchboards")
	}

	videoSearch(term){
		YTSearch({key:API_KEY,term:term}, (videos) =>{
			this.setState({ 
				videos:videos,
				selectedVideo:videos[0]
			});
		});
	}

	render() {

		const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300)

		return (
			<div className="App">
			<SearchBar onSearchTermChange={videoSearch}/>
			<Videodetail video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
				videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;
