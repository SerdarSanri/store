import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            new web app for your inventory management coming soon......<br/>
            it uses Nodejs(back-end) and react-redux app(front-end)
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;