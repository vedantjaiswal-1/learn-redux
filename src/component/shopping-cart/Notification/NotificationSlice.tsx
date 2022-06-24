import { createSlice } from "@reduxjs/toolkit";

export const NotificationSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state: any, action: any) {
      state.notification = {
        type: action.payload.type,
        message: action.payload.message,
        open: action.payload.message,
      };
    },
  },
});

export const NotificationAction = NotificationSlice.actions;

export default NotificationSlice.reducer;
