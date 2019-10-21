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
  if(!producto) {

    return(<div style={divStyle}><h2>  No Product was selected </h2> </div>);
  }
    
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> {producto.title} </h2>
      <p> {producto.descripcion} </p>
      <h3> Status {producto.disponibilidad ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {producto.precio} </h3>
     
    </div>
  )
}

export default Productos ;