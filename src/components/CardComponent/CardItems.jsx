import React from 'react'
import "./CardItemsStyle.css"

const CardItems = (props) => {
  return (
    <>
    <div className="product-items">
          <div className="div-image">
            <img
              src= {props.image}
              alt={props.alt}
            />
          </div>

          <div className="product-content">
            <h2> {props.title}</h2>
            <p>{props.desc}</p>
            <p>Price : {props.price}<sup>{props.sup}</sup>
            </p>
            <button>{props.btnName}</button>
          </div>
        </div>


   
    </>
  )
}

export default CardItems