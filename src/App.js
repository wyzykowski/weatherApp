import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './Forecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">weatherApp by <a href="http://wyzykowski.eu/" target="_blank" rel="noopener noreferrer">Wyzykowski</a></h1>
        </header>
        <Forecast />
      </div>
    );
  }
}

export default App;
