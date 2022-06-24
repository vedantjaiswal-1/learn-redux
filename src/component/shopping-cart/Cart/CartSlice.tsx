import { createSlice } from "@reduxjs/toolkit";
interface ICart {
  itemList: any;
  totalQuantity: number;
  showCart: boolean;
  changed: boolean
}

const initialState: ICart = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemList = action.payload.itemList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item: any) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true
      const id = action.payload;

      const existingItem = state.itemList.find((item: any) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item: any) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
