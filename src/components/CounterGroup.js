import React, { Component } from 'react';
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor() {
    super()
    this.state = {sum: 1}
  }
  render() {
    return (
      <div>
        <Counter/>
        <Counter/>
        <Counter/>
        <span>sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
