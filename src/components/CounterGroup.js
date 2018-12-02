import React, { Component } from 'react';
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      counter: new Array(prop.count).fill(0),
      sum: 1
    }
    console.log(prop, this.state);
  }
  render() {
    return (
      <div>
        {this.state.counter.map(() => <Counter/>)}
        <span>sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
