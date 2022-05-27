import React, { Component } from 'react';
import Home from './pages/Home';
import "./App.css";

const todoApp = () => <Home />;

class countApp extends Component {
  state = {
    count: 0
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  countDown = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


  render(){
    return (
      <div className='countApp'>
        <button onClick={this.countDown}>-</button>
        {this.state.count}
        <button onClick={this.countUp}>+</button>
      </div>

    );
  }
}

//export {todoApp, countApp};
export default todoApp;
//export default countApp;