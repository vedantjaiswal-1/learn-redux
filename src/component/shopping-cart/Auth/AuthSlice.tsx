import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  isLoggedIn: boolean;
}

const initialState: IAuth = {
  isLoggedIn: false,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
