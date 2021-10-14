import React from "react";

const Food = ({name, picture}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} style={{width:'100px' , height:'100px'}} />
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
  },
  {
    id: 2,
    name: "Samgyeopsal",
    img: "http://www.samda.com/shopimages/samdacom1/0200020000012.jpg?1634119503",
  },
  {
    id: 3,
    name: "bibimbap",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
  },
  {
    id: 4,
    name: "Kimbap",
    img: "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {foodLike.map(dish => (
        <Food name={dish.name} picture={dish.img} />
      )
    )
  }
    </div>
  );
}

export default App;