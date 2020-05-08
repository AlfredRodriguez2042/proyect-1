import React from 'react'
import ListProduct from './Product'

const ListProducts = (props) =>(
    <ul className="content-card">
        {
            props.product.map((prod,i)=>(
               <ListProduct 
               key={i}
               title={prod.title}
               category={prod.category }
               price={prod.price}
               brand={prod.brand}
               image={prod.image}
               
               /> 
            ))
        }
    </ul>
)
    

export default ListProducts



