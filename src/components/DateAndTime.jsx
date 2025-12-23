

import React from 'react'
 
//access date  object
const myDate = new Date()


const DateAndTime = () => {
  return (
    <>
    <h2>Date And Time</h2>
    
     
     <h3>{myDate.toLocaleTimeString()}</h3>

    
    </>
  )
}

export default DateAndTime