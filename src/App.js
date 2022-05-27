//import { render } from '@testing-library/react';
import React, { Component } from 'react';

let list = document.getElementById('list');
let text = document.getElementById('input');

class App extends Component {
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

  addTodo = () => {
      let temp = document.createElement('li');
      temp.innerHTML = text.value;
      list.appendChild(temp);
      text.value = "";
  }

  render(){
    return (
      <div className='App'>
        <button onClick={this.countDown}>-</button>
        {this.state.count}
        <button onClick={this.countUp}>+</button>

        <h1>TODO</h1>
        <input type = 'todo' name = 'todoText' value={text} placeholder='텍스트 입력'></input>
        <button type = "submit" name = 'add' onClick={this.addTodo}></button>



      </div>

    );
  }
}

export default App;
