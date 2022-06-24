import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationAction } from "./NotificationSlice";

export const Notification = ({ type, message }: any) => {
  const notification = useSelector((state: any) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      NotificationAction.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </div>
  );
};
