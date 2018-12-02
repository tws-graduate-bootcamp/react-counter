import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {number: 1}
  }
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
        <span>{this.state.number}</span>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default App;
