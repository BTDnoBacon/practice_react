import React from 'react';

function Login() {
  return (
    <div className="login">
      <form action="login/" method="POST">
        <input type="text" name="ID" id="ID" placeholder="아이디" />
        <input
          type="text"
          name="Password"
          id="password"
          placeholder="password"
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default Login;
