import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyD5A0nJP10Z6WHn_ONcRObKIVPGMYJ3f6I";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
      </div>
    );
  }
}

export default App;
