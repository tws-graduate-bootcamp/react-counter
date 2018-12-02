import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  increase=() => {
    alert("increase number by 1")
  }
  decrease=() => {
    alert("decrease number by 1")
  }
  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <span>0</span>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default App;
