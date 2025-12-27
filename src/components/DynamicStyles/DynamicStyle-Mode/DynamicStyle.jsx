import React, { useState } from 'react'

const DynamicStyle = () => {

    const [isLightMode, setIsLightMode] = useState(false)
  

     

    const hangingMode ={
        backgroundColor :  isLightMode ? "white"  : "black",
        height : "440px",
        width : "440px",
        borderRadius : "10px",
        margin : " 40px auto"
    }

    const handleChangeMode = ()=>{
        setIsLightMode(!isLightMode)
     }


  return (
   <>
   <div style={hangingMode}>
    </div> 

    <button onClick={handleChangeMode} style={{
        backgroundColor : "red",
        color : 'white',
        padding : "5px 20px",
        fontSize : "20px",
        border : "1px solid #222",
        outline : 'none',
        borderRadius : '10px',
        marginLeft : "650px"
        
    }}>
      {
        isLightMode ? "Dark Mode"  : "Light Mode"
      }
        
       </button>
     
   </>
  )
}

export default DynamicStyle




