import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./component/features/counter/counter";
import { Home } from "./component/home/Home";
import Auth from "./component/shopping-cart/Auth/Auth";
import Layout from "./component/shopping-cart/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "./component/shopping-cart/Notification/Notification";
import { NotificationAction } from "./component/shopping-cart/Notification/NotificationSlice";

let firstRender = true;
function App() {
  const cart = useSelector((state: any) => state.cart);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const notification = useSelector((state: any) => state.ui.notification)
  const dispatch = useDispatch();

  
  useEffect(() => {
    if(firstRender){
      firstRender = false;
      return 
    }
    const sendRequest = async () => {
      dispatch(
        NotificationAction.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-acf07-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        NotificationAction.showNotification({
          open: true,
          message: "Send data Successfull",
          type: "success",
        })
      );
    };
    sendRequest().catch((error: any) => {
      dispatch(
        NotificationAction.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    });
  }, [cart]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Learn-Redux</h1>
        <Counter></Counter>
        <br />
        <Home></Home>
      </header> */}
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth></Auth>}
      {isLoggedIn && <Layout></Layout>}
    </div>
  );
}

export default App;
