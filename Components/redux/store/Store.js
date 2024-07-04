"use client"
import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "../reducers/lorem/loremSlice";
import authReducer from "../reducers/authSlice";
import ShopSlice from "../reducers/ShopSlice";

export default configureStore({
reducer: {
lorem: loremSlice.reducer,
ShopSlice,
auth: authReducer,
},
});