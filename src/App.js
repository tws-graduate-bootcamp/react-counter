import React, { Component } from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup.js'

class App extends Component {
  render() {
    return (
      <CounterGroup size={3}/>
    );
  }
}

export default App;