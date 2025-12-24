import React from 'react'

const Child = (props) => {
  return (
   <>
    <button onClick={props.myFunc}>{props.text}</button>
    <h1>{props.outputs}</h1>
    <button onClick={props.myBu}>Click</button>
   
   </>
  )
}

export default Child