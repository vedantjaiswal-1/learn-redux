import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterReducer from "../component/features/counter/counterSlice"
import authReducer from '../component/shopping-cart/Auth/AuthSlice'
import cartReducer from '../component/shopping-cart/Cart/CartSlice'
import notificationReducer from '../component/shopping-cart/Notification/NotificationSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cart: cartReducer,
    ui: notificationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store