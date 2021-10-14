import React from "react";

class App extends React.Component{

  state = {
    isLoading: true, // this.state
  };

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div> //구조 분해 할당으로 this.state(현재 스테이트(상태)에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됨)
  }
}

export default App;