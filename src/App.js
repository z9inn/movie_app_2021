import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('hello') // 1
  }

  state = { //state는 동적데이터를 저장할 수 있어야한다
    count: 2,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log('render') // 2
    return (
    <>
    <h1>This Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </>
    )
  }
}

// 1,2 constructor()함수가 render() 함수보다 먼저 실행된다

export default App;