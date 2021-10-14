import React from "react";
import PropTypes from "prop-types";

const Food = ({name, picture, rating}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5</h4>
      <img src={picture} style={{ width: '100px', height: '100px' }} alt={name}/>
    </div>
  );
}

/* const renderFood = (dish) => {
  return <Food name={dish.name} picture={dish.img} />
} */

const renderFood = dish => { //매개변수가 하나일 땐 괄호를 쳐도 되고 안쳐도 된다 (dish) , 허나 복수 개 이상일 경우 소괄호로 묶어줘야함
  return <Food name={dish.name} picture={dish.img} />
}

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    img: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    img: "http://www.samda.com/shopimages/samdacom1/0200020000012.jpg?1634119503",
    rating: 4.9,
  },
  {
    id: 3,
    name: "bibimbap",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.4,
  },
  {
    id: 4,
    name: "Kimbap",
    img: "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
    rating: 4.3,
  },
];

//id 추가 하는 이유
//리액트는 Food 컴포넌트가 서로 다르다는 걸 알 방법이 없기 때문이다
//그리고 리액트에게 컴포넌트가 서로 다르다는 걸 알려주는 방법이 컴포넌트에 key props를 추가하는 것이다

function App() {
  return (
    <div className="App">
      {foodLike.map(dish => ( //Arrow Function은 함수명과 리턴값이 없어도 사용할 수 있다. 굳이 function 키워드가 없어도 되고 return을 사용하지 않아도 식을 계산한 값이 자동으로 변환된다
        <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating} /> //key props는 리액트 내부에서 사용되는 특수한 props이기 때문에 내가 직접 만들 props와 다르게 Food 컴포넌트에 직접 전달되지 않는다
      )
    )
  }
    </div>
  );
}

//prop-types는 props를 검사하고 자료형과 그 이름의 값이 전달되었는지 검사해준다. 개발자가 실수하지 않도록 예방해주는 유용한 도구이다
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired, //isRequired: 필요하다
  rating: PropTypes.number, //string + isRequired는 문자열 자료형이 필요하다. 라는 뜻 인데 rating은 숫자로 이루어져 있는 데이터이니 string이 아닌 number 타입이어야 맞다
};

export default App;