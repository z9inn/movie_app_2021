import React from "react";
import axios from "axios";

class App extends React.Component{

  state = {
    isLoading: true, // this.state
    movies: [],
  };

  componentDidMount() { // App 컴포넌트가 그려지면(render() 함수가 실행되면) 호출되는 생명주기 함수는 componentDidMount() 함수다
    // 영화 데이터 로딩! (영화 데이터 로딩이 완료되면 이란뜻)
    axios.get('https://yts-proxy.now.sh/list_movies.json');
  };

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div> //구조 분해 할당으로 this.state(현재 스테이트(상태)에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됨)
  }
}

export default App;