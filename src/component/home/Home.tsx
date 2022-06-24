import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
    const count = useSelector((state: any) => state.counter.value)
  return (
    <div>{count}</div>
  )
}
