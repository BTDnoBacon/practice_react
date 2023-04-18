import React from 'react';
import styled from 'styled-components';
import NavbarItem from './Navbar_item';
// import Login from './Login';

const Navdiv = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 0 2rem 0 2rem;
  background-color: #c4b5fd;
  position: fixed;
  width: 100%;
`;
function Navbar() {
  // let [loginstate, loginState] = useState(false);
  // useEffect(() => {
  //   if (loginstate === false) {
  //     loginstate = true;
  //   } else {
  //     loginstate = false;
  //   }
  // });
  return (
    <Navdiv className="Navbar" id="Navbar">
      <div>
        <NavbarItem name="영화" url="https://아직안정함" />
        <NavbarItem name="연극" url="https://아직안정함" />
      </div>
      <div>
        {/* <Login /> */}

        {/* <div onClick={}>로그인</div> */}
        <a href="Signup/">회원가입</a>
      </div>
    </Navdiv>
  );
}

export default Navbar;
