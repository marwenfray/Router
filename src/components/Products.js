import React from 'react'
import { Link, Route } from 'react-router-dom';
import Product from './Product'

const Products = ({ match }) => {

    const productsData = [
        {
            id: 1,
            name: 'NIKE Liteforce Blue Sneakers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            status: 'Available'
          
          },
          {
            id: 2,
            name: 'U.S. POLO ASSN. Slippers',
            description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
            status: 'Available'
          
          },
          {
            id: 3,
            name: 'ADIDAS Adispree Running Shoes',
            description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
            status: 'Available'
          },
          {
            id: 4,
            name: 'Lee Cooper Mid Sneakers',
            description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
            status: 'Out of Stock'
          },
 
 
 ];
 
   var linkList = productsData.map( (product) => {
     return(
       <li>
         <Link to={`${match.url}/${product.id}`}>
           {product.name}
         </Link>
       </li>
       )
 
     })
 
   return(
     <div style={{display:'flex'}}>
         <div style={{display:'block',justifyContent:'spacebetween' ,width:'30%'}}>
          <div style={{float:'left',padding:'10px' ,backgroundColor:'rgb(240, 240, 240)',marginLeft:'auto' ,width:'100%'}}>
            
            <h3> Products</h3>
            <ul style={{listStyleType:'none',padding:'0px',fontSize:'15px'}}> {linkList} </ul>
          </div>
          </div>

          <div style = {{display:'flex' , width:'70%'}}>
              <div style={{width:'80%',margin:'0px 10%' ,background:'rgb(255, 255, 255' }}>
         
 
                 <Route path={`${match.url}/:productId`}
                      render={ (props) => <Product data= {productsData} {...props} />}/>
                 <Route exact path={match.url}
                     render={() => (<div style ={{textAlign:'center'}}>Please select a product.</div>)}/>
             </div> 
         </div>
     </div>
   )
 }

 export default Products