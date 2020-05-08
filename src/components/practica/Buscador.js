import React from 'react'

const Buscador = props =>(
    <form className="form">
        <input type="seach" className="search" name="search" id="search" onChange={props.onSearch} placeholder=" Buscar por productos, deportes o marcas..." ></input>
        <label for="search" className="icon-search"></label>
    </form>
)

export default Buscador