import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super()
    this.state = {number: 1}
  }
  increase=() => {
    this.setState({number: this.state.number+1})
  }
  decrease=() => {
    this.setState({number: this.state.number-1})
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

export default Counter;
