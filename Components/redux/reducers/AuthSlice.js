import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Url = "https://zayady.deltawy.com";

// Thunks definitions
export const sign = createAsyncThunk("auth/register", async (res, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/sign`, res);
    const { data } = response;
    // Assuming data structure for response contains mail, UserName, UserID, ISAdmin
    window.localStorage.setItem("ib_mail", data.mail);
    window.localStorage.setItem("ib_Name", data.UserName);
    window.localStorage.setItem("ib_ID", data.UserID);
    window.localStorage.setItem("ib_Admin", data.ISAdmin);
    window.localStorage.setItem("ib_pass", res.password);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const Userlogin = createAsyncThunk("auth/Userlogin", async (res, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/loginn/`, res);
    const { data } = response;
    if (!data.Errors || data.Errors.length === 0) {
      window.localStorage.setItem("ib_mail", data.email);
      window.localStorage.setItem("ib_Name", res.name);
      window.localStorage.setItem("ib_ID", data.id);
      window.localStorage.setItem("ib_Admin", data.isAdmin);
      window.localStorage.setItem("ib_pass", res.password);
    }
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getUserInfo = createAsyncThunk("auth/getUserInfo", async (id, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/getUserInfo`, { id });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const saveUserInfo = createAsyncThunk("auth/saveUserInfo", async (res, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/saveUserInfo?timestamp=${new Date().getTime()}`, res);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateUserInfo = createAsyncThunk("auth/updateUserInfo", async (res, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/UpdateUserInfo`, res);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const saveMessage = createAsyncThunk("auth/saveMessage", async (res, thunkAPI) => {
  try {
    const response = await axios.post(`${Url}/rest/test.product/saveMessage`, res);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Redux slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    loginn: true,
    register: false,
    forget: false,
    sendcode: false,
    newpass: false,
    userInfo: null,   
  },
  reducers: {
    GotoLogin: (state) => {
      state.loginn = true;
      state.register = false;
      state.forget = false;
      state.sendcode = false;
      state.newpass = false;
    },
    GoToRegister: (state) => {
      state.register = true;
      state.loginn = false;
      state.forget = false;
      state.sendcode = false;
      state.newpass = false;
    },
    GoToForget: (state) => {
      state.forget = true;
      state.loginn = false;
      state.register = false;
      state.sendcode = false;
      state.newpass = false;
    },
    GoToSendCode: (state) => {
      state.sendcode = true;
      state.loginn = false;
      state.register = false;
      state.forget = false;
      state.newpass = false;
    },
    GoToNewPass: (state) => {
      state.newpass = true;
      state.loginn = false;
      state.register = false;
      state.forget = false;
      state.sendcode = false;
    },
    Logout: (state) => {
      window.localStorage.clear();   
      state.userInfo = null;   
      state.loginn = true;
      state.register = false;
      state.forget = false;
      state.sendcode = false;
      state.newpass = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sign.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(Userlogin.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(saveUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(saveMessage.fulfilled, (state, action) => {
        console.log(action);
      });
  },
});

export const { GotoLogin, GoToRegister, GoToForget, GoToSendCode, GoToNewPass, Logout } = authSlice.actions;

export default authSlice.reducer;
