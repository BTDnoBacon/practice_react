import React from 'react';
import styled from 'styled-components';

const Postera = styled.a`
  box-sizing: border-box;
  margin: 1rem;
  width: 208px;
  height: 330px;
  background-color: #1f1f1f;
  border: 2px solid #1f1f1f;
  color: #fff;
`;
function Poster(props) {
  const { url, img, name } = props;
  return (
    <Postera href={url}>
      <img src={img} alt="포스터사진" />
      <span>{name}</span>
    </Postera>
  );
}

export default Poster;
