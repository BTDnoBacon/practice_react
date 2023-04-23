import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarItem from './Navbar_item';
import Mainsection from './Mainsection';
import Signup from './Signup';
import Login from './Login';

const Navdiv = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  /* padding: 0 2rem 0 2rem; */
  background-color: #c4b5fd;
  position: fixed;
  width: 100%;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 32px;
`;
function Index() {
  const [signupstate, setSignupstate] = useState(0);
  const [loginstate, setLoginstate] = useState(0);

  const signupclick = () => {
    console.log('회원가입 클릭');
    setSignupstate(signupstate + 1);
  };
  const loginclick = () => {
    console.log('로그인 클릭');
    setLoginstate(loginstate + 1);
  };
  return (
    <>
      <Navdiv>
        <div>
          <NavbarItem name="영화" url="https://아직안정함" />
          <NavbarItem name="연극" url="https://아직안정함" />
        </div>
        <div>
          <Button type="button" onClick={loginclick}>
            로그인
          </Button>
          <Button type="button" onClick={signupclick}>
            회원가입
          </Button>
        </div>
      </Navdiv>
      <Signup divstate={signupstate} />
      <Login divstate={loginstate} />
      <Mainsection kind="movie" />
    </>
  );
}

export default Index;
