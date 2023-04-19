import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Backdiv = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 10000;
`;
const Logindiv = styled.div`
  margin-top: 8rem;
  position: fixed;
  background-color: #fff;
  border-radius: 12px;
  width: 400px;
  height: 400px;
  z-index: 10001;
`;
const Clickdiv = styled.div`
  /* display: ; */
  align-content: center;
  justify-items: center;
  justify-content: center;
`;
const Loginform = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
`;
const Textinput = styled.input`
  width: 300px;
  height: 2rem;
  margin: 1rem;
`;
function Signup(props) {
  const { divstate } = props;
  const [dis, setDisplay] = useState(false);
  useEffect(() => {
    if (divstate > 0) {
      setDisplay(true);
    }
  }, [divstate]);
  const backclick = () => {
    setDisplay(false);
  };
  return (
    <Clickdiv className={`signup ${dis ? 'open' : ''}`}>
      <Backdiv onClick={backclick} />
      <Logindiv>
        <Loginform action="login/" method="POST">
          <p>회 원 가 입</p>
          <Textinput type="text" name="ID" id="ID" placeholder="아이디" />
          <Textinput
            type="text"
            name="Password"
            id="password"
            placeholder="PASSWORD"
          />
          <Textinput type="text" name="email" id="email" placeholder="email" />
          <Textinput type="submit" value="회원가입" />
        </Loginform>
      </Logindiv>
    </Clickdiv>
  );
}

export default Signup;
