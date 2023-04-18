import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Poster from './Poster';

const Maindiv = styled.div`
  background-color: #fff;
  padding: 2rem;
  padding-top: 100px;
`;
const Posterdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
async function Mainsection() {
  const dummy = await axios.get('dummy.json').then((response) => {
    const a = response.data.movies.map((item) => <Poster key={item.id} />);
    return a;
  });
  // .then((response) => response);
  console.log(dummy);
  console.log('---');
  // const posterlist = dummy.movies.map(() => <Poster />);
  // console.log(movies);
  return (
    <Maindiv>
      <div>영화 리스트</div>
      {/* <button onClick={click} type="button">
        눌러보기
      </button> */}
      <Posterdiv>
        {dummy.map((item) => {
          console.log(item);
          return <div>{item}</div>;
        })}
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
      </Posterdiv>
    </Maindiv>
  );
}

export default Mainsection;
