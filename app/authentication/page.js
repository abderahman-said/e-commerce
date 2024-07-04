// pages/authentication/page.js
"use client";
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Loading from "../../Components/Loading"
import { Logout } from '@/Components/redux/reducers/authSlice';
const Forget = dynamic(() => import('../Auth/forget/page'), { loading: () => <Loading /> });
const Login = dynamic(() => import('../Auth/login/page'), { loading: () => <Loading /> });
const NewPassword = dynamic(() => import('../Auth/NewPassword/page'), { loading: () => <Loading /> });
const Register = dynamic(() => import('../Auth/Register/page'), { loading: () => <Loading /> });
const ResendCode = dynamic(() => import('../Auth/ResendCode/page'), { loading: () => <Loading /> });
import { useRouter } from "next/navigation";

const Auth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginn, register, forget, sendcode, newpass } = useSelector((state) => state.auth);


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
