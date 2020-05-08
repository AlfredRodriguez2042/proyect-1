import React, { Component } from 'react';
import Short from '../../assets/img/short.jpg'


class Menu  extends Component{
    render(){
        return(
            <div>
            <nav className="menu" >
            <div className="centrado" >
                <ul className="menu-item">
                    <li className="menu-link" >HOMBRE
                    <ul className="sub-menu">
                      <div className="ctn-menu">
                          <div className="sub-menu-data">
                          <a className="active">Calzado</a>
                          <a>Botines</a>
                          <a>Zapatillas</a>
                          <a>Botines contacones</a>
                          <a>Ojotas / Chinelas</a>
                          <a>Sandalia</a>                       
                          </div>

                          <div className="card-menu">
                          <h2 className="card-menu-img"><img src={Short} /> </h2>
                          <h2 className="card-title">short</h2>
                          <h3 className="card-price"> $ 109</h3>
                          <p className="card-brand">adidas  </p>
                          </div>
                      </div>
                    </ul>
                    </li>
                    <li className="menu-link" >MUJER</li>
                    <li className="menu-link" >NIÑOS</li>
                </ul>
                <div className="shop" >
             <p className="carrito">Carrito  <span className="icon-basket-2"></span> $ 0.00 </p>
             </div>
             </div>
            </nav>
            
            </div>
        )
    }

}


export default Menu;