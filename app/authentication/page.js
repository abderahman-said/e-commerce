"use client"
// Auth.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import Loading from "../../Components/Loading";

import Forget from "../Auth/forget/page"
import Login from "../Auth/login/page"
import NewPassword from "../Auth/NewPassword/page"
import Register from "../Auth/Register/page"
import ResendCode from "../Auth/ResendCode/page"

const Auth = () => {
  const [authState, setAuthState] = useState({
    loginn: true,
    register: false,
    forget: false,
    sendcode: false,
    newpass: false,
  });

  const { loginn, register, forget, sendcode, newpass } = authState;

  return (
    <div className="login-content">
      <Container>
        <div className="login-main">
          {loginn && <Login />}
          {register && <Register />}
          {forget && <Forget />}
          {sendcode && <ResendCode />}
          {newpass && <NewPassword />}
        </div>
      </Container>
    </div>
  );
};

export default Auth;
