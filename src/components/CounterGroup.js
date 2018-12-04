import React, { Component } from 'react';
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(prop) {
    super(prop)
    this.state = this.getInitState(prop.size)
  }
  getInitState = (size) => ({
    counter: new Array(size).fill(Date.now()),
    sum: 0
  })
  updateSum = (delta) => {
    this.setState({sum: this.state.sum+delta})
  }
  regenerateCounters = () => {
    this.setState(this.getInitState(+this.refs.size.value))
  }
  render() {
    return (
      <div>
        <button onClick={this.regenerateCounters}>show me</button>
        <input type="number" ref="size"/>counters
        {this.state.counter.map((_, i) => <
          Counter
            key={_+i}
            onUpdate={this.updateSum}
        />)}
        <span>sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
