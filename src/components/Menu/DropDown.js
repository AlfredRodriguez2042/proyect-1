import React from 'react'


const DropDown = (props)=>(
    <div>
        <div className="drop" id="drop" >
        <span  id="menu" className="icon-menu" onClick={props.onDrop} />
        <nav className="down">
        <ul className="drop-menu">
            <li className="drop-link"> <span className="icon-pinboard"/> Sucursales</li>
            <li className="drop-link"> <span  className="icon-tag"/> Como Comprar</li>
            <li className="drop-link"> <span  className="icon-basket"/> Mis Pedidos</li>
            <li className="drop-link">Centro de Ayuda</li>

        </ul>
         <ul className="drop-submenu">
              <p className="categorias">Categorias</p>
         <li className="drop-link">Hombres</li>
         <li className="drop-link">Mujeres</li>
         <li className="drop-link">Niños</li>
            
         </ul>
        
        </nav>
        </div>
    </div>
)
export default DropDown