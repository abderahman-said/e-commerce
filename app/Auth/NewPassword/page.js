"use client"
import React, { useState } from "react";
import styles from "../../page.module.css";

import { GotoLogin } from "../../../Components/redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const NewPassword = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const SendData = (e) => {
    e.preventDefault();
    dispatch(GotoLogin());
  };
  return (
    <form>
        <div className="container">

      <h1 className={styles.mainHeading}>انشاء كلمة سر الجديدة</h1>
      <div className={styles.inputDiv}>
        <label htmlFor="password">كلمة المرور الجديدة</label>
        <input
          type="text"
          name="password"
          id="password"
          // placeholder="كلمة المرور الجديدة"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="confirmPass">تأكيد كلمة المرور</label>
        <input
          type="confirmPass"
          name="confirmPass"
          id="confirmPass"
          // placeholder="تأكيد كلمة المرور"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>

      <button
        name="NewPassword"
        type="submit"
        className={styles.submit_button}
        onClick={(e) => {
          SendData(e);
        }}
      >
        الدخول
      </button>
      </div>

    </form>
  );
};

export default NewPassword;
