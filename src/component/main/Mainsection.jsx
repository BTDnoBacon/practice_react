import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
function Mainsection(props) {
  const { kind } = props;
  const [data, setData] = useState([]);
  const [datastate, setDatastate] = useState(false);
  const url = `dummy/${kind}.json`;
  const getData = async () => {
    await axios.get(url).then((response) => {
      setData(response.data);
      setDatastate(true);
    });
  };
  useEffect(() => {
    getData();
  });
  // const value = `${kind}s`

  return (
    <Maindiv>
      <div>영화 리스트</div>
      <Posterdiv>
        {datastate
          ? data.movies.map((item) => (
              <Link to={`/detail/${item.id}`}>
                <Poster key={item.id} {...item} />
              </Link>
            ))
          : '로딩중'}
      </Posterdiv>
    </Maindiv>
  );
}

export default Mainsection;
