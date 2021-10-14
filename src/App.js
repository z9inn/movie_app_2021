import React from "react";
import axios from "axios";

class App extends React.Component{

  state = {
    isLoading: true, // this.state
    movies: [],
  };
  // async는 자바스크립트에게 getMovies() 함수는 시간이 필요하고
  // async는 JS에게 getMovies() 함수가 비동기라고 말해주는 것. JS에게 getMovies() 함수는 비동기라서 기다려야 해라고 말한거라고 생각하면 됨
  getMovies = async () => { 
    const { 
      data: {
        data: { movies }, // 여기 movies는 axios.get()의 결과를 담을 변수이고, 위 state에 있는 movies는 변수가 아닌 state다. 엄연히 다른것이니 혼동하지 말자
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json'); // await.get()의 실행을 기다려달라고 말해주는 것
                                                                                // await은 JS에게 getMovies() 함수 내부의 axios.get()의 실행 완료를 기다렸다가 끝나면 계속 진행하라고 말한 것
    // 여기서 중요한 내용은 API에서 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하고, 그 사실을 JS에게 알려야만 데이터를 잡을수 있으므로 async, await을 사용 했다는 것
    // async와 await은 짝꿍이다 그래서 둘은 동시에 사용해야만 한다!!!!
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() { // App 컴포넌트가 그려지면(render() 함수가 실행되면) 호출되는 생명주기 함수는 componentDidMount() 함수다
    // 영화 데이터 로딩! (영화 데이터 로딩이 완료되면 이란뜻)
    this.getMovies();
  };

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div> //구조 분해 할당으로 this.state(현재 스테이트(상태)에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됨)
  }
}

export default App;