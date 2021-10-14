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

  componentDidMount() {
    console.log('component redered'); // 3
  }

  render() {
    console.log("i'm rendering") // 2
    return (
    <>
    <h1>This Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </>
    )
  }
}

// 1,2,3 순서대로 실행된다. 함수의 실행 순서가 궁금하다면 React Life Cycle을 검색해보자

export default App;