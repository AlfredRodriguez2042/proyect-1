import React from 'react'
const ListProduct = (props)=>(
    <li className="card">
     <h2 className="card-img" id="imge"><img src={props.image} alt=" portada1" /> </h2>
    <h2 className="card-title"> {props.title} </h2>
    <h3 className="card-price" id="price"> $ {props.price} </h3>
    <p className="card-brand"> {props.brand} </p>
    </li>
)

export default ListProduct