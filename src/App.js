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
  componentDidUpdate() {
    console.log('I just updated'); // 이 함수는 화면이 업데이트 되면 실행된다. (F5말고 내용이 업데이트 되면 실행된다. 현재 상태에서는 Add나 Minus 버튼을 누르면 콘솔에 찍힌다)
    // 추가 또는 제거 버튼을 누르면 setState() 함수가 실행되고, render() 함수가 다시 실행되니까(화면이 업데이트 되니까) componentDidUpdate() 함수가 실행되는 것
    // p.133 그림 참고
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