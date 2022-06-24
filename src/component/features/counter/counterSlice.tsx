import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICounterState{
    value: number
}

const initialState: ICounterState ={
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
          },
        addBy10: (state) => {
            state.value += 10
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
        },  
    }
}) 

export const { increment, decrement, incrementByAmount, addBy10 } = counterSlice.actions

export default counterSlice.reducer
