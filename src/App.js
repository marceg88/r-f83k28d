import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      action:0
    }
    this.increment = this.increment.bind(this)
  }

  increment(on){
    this.setState({
      action: this.state.action + 1
    })
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.action}</span>
        <button onClick= {this.increment}>Incrementa</button>
      </div>
    );
  }
}

export default App;
