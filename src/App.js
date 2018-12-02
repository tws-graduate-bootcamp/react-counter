import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert('+')}>+</button>
        <span>0</span>
        <button onClick={() => alert('-')}>-</button>
      </div>
    );
  }
}

export default App;
