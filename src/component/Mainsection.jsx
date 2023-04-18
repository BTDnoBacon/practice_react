import React, { useEffect, useState } from 'react';
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
function Mainsection() {
  const [data, setData] = useState([]);
  const [datastate, setDatastate] = useState(false);
  const getData = async () => {
    await axios.get('dummy.json').then((response) => {
      setData(response.data);
      setDatastate(true);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Maindiv>
      <div>영화 리스트</div>
      <Posterdiv>
        {datastate
          ? data.movies.map((item) => <Poster key={item.id} {...item} />)
          : '로딩중'}
        {/* <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" />
        <Poster url="아직없어요" /> */}
      </Posterdiv>
    </Maindiv>
  );
}

export default Mainsection;
