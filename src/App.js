import React from "react";

const Food = ({name, picture}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} style={{width:'100px'}} />
    </div>
  );
}

const foodLike = [
  {
    name: "kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    name: "Samgyeopsal",
    img: "http://www.samda.com/shopimages/samdacom1/0200020000012.jpg?1634119503",
  },
  {
    name: "bibimbap",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
  },
  {
    name: "Kimbap",
    img: "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {foodLike.map((dish) => (
        <Food name={dish.name} picture={dish.image} picture={dish.img} /> //props는 마지막에 작성된 것만 나오는 듯? image인 김치와 비빔밥은 안나오고 img인 삼겹살과 김밥만 나온다 순서를 달리하면 김치와 비빔밥만 나온다
      ))}
    </div>
  );
}

export default App;