"use client"
import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "../reducers/lorem/loremSlice";
import AuthSlice from "../reducers/AuthSlice";
import ShopSlice from "../reducers/ShopSlice";

export default configureStore({
  reducer: {
    lorem: loremSlice.reducer,
    AuthSlice,
    ShopSlice,
  },
});
