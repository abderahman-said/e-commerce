import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../page.module.css";
import dynamic from "next/dynamic";

const Forget = dynamic(() => import("../Auth/forget/page"), {
  loading: () => <p>Loading...</p>,
});
const Login = dynamic(() => import("../Auth/login/page"), {
  loading: () => <p>Loading ...</p>,
});
const NewPassword = dynamic(() => import("../Auth/NewPassword/page"), {
  loading: () => <p>Loading ...</p>,
});
const Register = dynamic(() => import("../Auth/Register/page"), {
  loading: () => <p>Loading ...</p>,
});
const ResendCode = dynamic(() => import("../Auth/ResendCode/page"), {
  loading: () => <p>Loading ...</p>,
});
// RiLockPasswordFill

const Auth = () => {
  // const { loginn, register, forget, sendcode, newpass } = useSelector(
  //   (state) => state.AuthSlice
  // );
  return (
    <div className="login-content">
      <Container>
        <div className="login-main">
       <Login />
          {/* {loginn && <Login />} */}
          {/* {register && <Register />}
          {forget && <Forget />}
          {sendcode && <ResendCode />}
          {newpass && <NewPassword />} */}
        </div>
      </Container>
    </div>
  );
};

export default Auth;
