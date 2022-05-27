import React, { Component } from 'react';
import Home from './pages/Home';

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

        <h1>TODO</h1>



      </div>

    );
  }
}

export default todoApp;
