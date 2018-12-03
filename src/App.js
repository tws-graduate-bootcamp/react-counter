import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js'
import CounterGroup from './components/CounterGroup.js'

class App extends Component {
  render() {
    return (
      <CounterGroup size={3}/>
    );
  }
}

export default App;
