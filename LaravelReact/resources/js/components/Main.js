import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Producto from './Productos';
import AddProducto from './AddProductos';

/* Main Component */
export default class Main extends Component {

  constructor() {
  
    super();
    //Initialize the state in the constructor
    this.state = {
        products: [],
        currentProducto: null
    
    }
     this.handleAddProduct = this.handleAddProduct.bind(this);
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/productos')
        .then(response => {
            return response.json();
        })
        .then(productos => {
            //Fetched product is stored in the state
            this.setState({ productos });
        });
  }

 renderProductos() {
        const listStyle = {
            listStyle: 'none',
            fontSize: '18px',
            lineHeight: '1.8em',
        }
    return this.state.productos.map(producto => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li style={listStyle} onClick={
                () =>this.handleClick(producto)} key={producto.id} >
                { producto.title } 
            </li>      
        );
    })
  }

  handleClick(producto) {

      //handleClick is used to set the state
      this.setState({currentProducto:producto});
  
  }

   handleAddProducto(producto) {
     
    producto.precio = Number(producto.precio);
    /*Fetch API for post request */
    fetch( 'api/productos/', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(producto)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
       
        this.setState((prevState)=> ({
            products: prevState.productos.concat(data),
            currentProducto : data
        }))
    })
 //update the state of products and currentProduct
  }  
    
  render() {

   const mainDivStyle =  {
        display: "flex",
        flexDirection: "row"
    }
    
    const divStyle = {
       
        justifyContent: "flex-start",
        padding: '10px',
        width: '35%',
        background: '#f0f0f0',
        padding: '20px 20px 20px 20px',
        margin: '30px 10px 10px 30px'
        
    }

    return (
        <div>
          <div style= {mainDivStyle}>
            <div style={divStyle}>
                <h3> All products </h3>
                  <ul>
                    { this.renderProductos() }
                  </ul> 

            </div> 
                <Producto producto={this.state.currentProducto} />
                <AddProducto onAdd={this.handleAddProducto} /> 
          </div>
              
        </div>
      
    );
  }
}



/* The if statement is required so as to Render the component 
 * on pages that have a div with an ID of "root";  
 */ 

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}