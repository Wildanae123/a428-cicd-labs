import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const computerName = window.navigator.userAgent;
    const accessDate = new Date().toLocaleString();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React app</h1>
        </header>
        <p className="App-intro">
          <p>Computer name : {computerName}</p>
          <p>Access Date : {accessDate}</p>
        </p>
      </div>
    );
  }
}

export default App;
