import React from 'react'
// import store from './store'
import { useSelector,useDispatch } from 'react-redux'
import { incNum,decNum } from './actions'

const App = () => {
  const myState = useSelector((state)=>state.changeTheNum)
  const dispatch = useDispatch();
  return (
    <>
    <h1>Welcoome to redux</h1>
    <button  className="quantity_minus" title='decrement'onClick={()=>{dispatch(decNum(1))}}><span>Decrement Data -</span></button>
    <input type="text" className='quantity_input'  name='quantity' value={myState}/>
    <button  className="quantity_plus" title='increment' onClick={()=>{dispatch(incNum(5))}}><span>Decrement Data +</span></button>
    </>
  )
}

export default App
