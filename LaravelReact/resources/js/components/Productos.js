import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Productos = ({producto}) => {
   
  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }

  //if the props for product is null, return Product doesn't exist
  if(!product) {

    return(<div style={divStyle}><h2>  No Product was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> {product.title} </h2>
      <p> {product.descripcion} </p>
      <h3> Status {product.disponibilidad ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.precio} </h3>
     
    </div>
  )
}

export default Productos ;