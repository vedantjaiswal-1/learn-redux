import React from "react";
import Header from "../Header/Header";
import Products from "../Product/Products";
import "./Layout.css";
import CartItems from "../Cart/CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const showCart = useSelector((state: any) => state.cart.showCart)
  const itemList = useSelector((state: any) => state.cart.itemList)

  itemList.forEach((item: any) => {
    total += item.totalPrice;
  })
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;