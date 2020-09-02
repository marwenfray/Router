import React from 'react'

const Product = ({match,data}) => {
    var product= data.find(p => p.id === match.params.productId);
    var productData;
  
    if(product)
      productData = <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr/>
        <h4>{product.status}</h4>  </div>;
    else
      productData = <h2> Sorry. Product doesnt exist </h2>;
  
    return (
      <>
           {productData}
       </> 
    )    
  }

export default Product
