import React from "react";

class App extends React.Component{
  state = { //state는 동적데이터를 저장할 수 있어야한다
    count: 2,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }))
  }

  minus = () => {
    this.setState({count: this.state.count - 1}) // 이렇게 코드를 작성해서 state를 업데이트 하는것은 좋지않다 성능에 문제가 생길 수 있다. 그러니 위 add 함수 처럼 current 인자를 사용하도록 하자
  }

  render() {
    return (
    <>
    <h1>This Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </>
    )
  }
}

export default App;