import React from 'react'

const User = ({name, skill, age}) => {
  return (
    <>
      
    <div className="container">
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{skill}</p>
    </div>
    
    </>
  )
}

export default User