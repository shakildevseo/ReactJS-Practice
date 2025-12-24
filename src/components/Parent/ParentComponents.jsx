import React, { useState } from 'react'
import Child from '../Child/Child'

const ParentComponents = () => {

   const [message, setMessage] = useState("Click Now")
   const [output, setOutput]= useState("Hey Developer")

     const handleClick = ()=>{
       setMessage("Button Was Clicked")
     }
     
    const  handleutput = ()=>[
        setOutput("Shakil Devs")
    ]
  return (
   <>
     <Child   myFunc = {handleClick}  text= {message} outputs= {output} myBu= {handleutput}/>

   
   </>
  )
}

export default ParentComponents