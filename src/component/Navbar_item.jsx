import React from 'react';
import styled from 'styled-components';

const Navbaratag = styled.a`
  margin: 1rem;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  font-style: normal;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;
function NavbarItem(props) {
  const { name, url } = props;
  return (
    <Navbaratag href={url} className="url-btn">
      {name}
    </Navbaratag>
  );
}

export default NavbarItem;
