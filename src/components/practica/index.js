import React, { Component } from "react"
import { Products } from "../../data/index.json"

import Buscador from "./components/practica/Buscador"

import Logo from "../../assets/img/logo.jpg"
import Logo2 from "../../assets/img/HeaderHomeAbril.gif"
import "../../index.css"

import Menu from "../Menu"
import Banner from "../Banner"
import Footer from "../Footer"

//import Listproduct from '../products/Product'
import ListProducts from "../products/ListProduct"

class Practica extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Products,

      filter: {
        title: "",
        price: "",
        category: [],
        search: "",
      },
    }
    this.hadleOnSearch = this.hadleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
    this.handleOfert = this.handleOfert.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.handleOnReq = this.handleOnReq.bind(this)
  }

  hadleOnSearch(e) {
    let newFilter = Object.assign({}, this.state.filter, {
      [e.target.name]: [e.target.value],
    })
    this.setState({
      filter: newFilter,
    })
    console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, "i")
    return data.filter(
      (q) =>
        regex.test(q.title) || regex.test(q.category) || regex.test(q.brand)
    )
  }

  handleColor() {
    let img = document.getElementsByClassName("card-img")
    let verde = document.getElementsByClassName("card-price")
  }

  handleOfert(e) {
    let i = 0
    let producto = document.getElementsByClassName("card")
    //console.log(producto)

    for (i = 0; i < producto.length; i++) {
      if (i % 2 == 0) {
        var para = document.createElement("P")
        var t = document.createTextNode("Oferta")
        para.appendChild(t)

        para.classList.add("ofert")

        producto[i].insertBefore(para, producto[i].childNodes[1])
      }
    }
  }

  handleSlider() {
    let index = 0
    let slide = document.getElementsByClassName("slide")
    let dote = document.getElementsByClassName("dot")

    const slider = () => {
      for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
      }

      index++

      if (index > slide.length) {
        index = 1
      }

      for (let i = 0; i < dote.length; i++) {
        dote[i].className = dote[i].className.replace(" active-dot", "")
      }
      slide[index - 1].style.display = "block"
      dote[index - 1].className += " active-dot"
      setTimeout(slider, 3000)
    }
    slider()
  }
  handleOnReq(e) {
    console.log("holaa")
    //e.preventDefault();
    fetch(`http://remote.fizzmod.com/ajax.php`)
      .then((res) => res.json())
      .then((userInfo) => this.setState({ userInfo }))
  }
  componentDidMount() {
    this.handleOfert()
    this.handleSlider()
    this.handleColor()
    //this.handleOnReq();
  }

  render() {
    //    const ListProduct = this.state.Products.map( (prod)=>{
    //        return(
    //           <div className="card">
    //           <img src={prod.image} />
    //           <h2> {prod.title} </h2>
    //           <h3> {prod.price} </h3>
    //           <p> {prod.brand} </p>
    //           </div>
    //        );
    //    })

    return (
      <div className="content">
        <header className="header">
          <div className="content-header">
            <ul className="helpers">
              <li className="helper">SUCURSALES</li>
              <li className="helper">COMO COMPRAR</li>
              <li className="helper">MIS PEDIDOS</li>
            </ul>
            <div className="logo">
              <div className="logo-fizz">
                <img src={Logo} className="fizz" />{" "}
              </div>
              <Buscador onSearch={this.hadleOnSearch} />
              <img src={Logo2} />
            </div>
          </div>
        </header>
        <Menu />
        <Banner onClick={this.handleOnReq} />
        <section>
          <div className="wraper">
            <div className="content-grid">
              <div className="filtro">
                <ul className="filtro-list">
                  <li className="filtro-item active-item">
                    <h3> SEXO </h3>{" "}
                    <ul className="sub-list">
                      <li className="filtro-link">
                        <input type="checkbox" />
                        hombre
                      </li>
                      <li className="filtro-link">
                        {" "}
                        <input type="checkbox" />
                        mujer{" "}
                      </li>
                      <li className="filtro-link">
                        {" "}
                        <input type="checkbox" />
                        niños{" "}
                      </li>
                    </ul>{" "}
                  </li>
                  <li className="filtro-item">
                    {" "}
                    <h3>DEPORTE</h3>
                  </li>
                  <li className="filtro-item">
                    {" "}
                    <h3>COLOR</h3>{" "}
                  </li>
                </ul>
              </div>
              <div className="wraper-products">
                <ListProducts
                  product={this.handleOnFilter(
                    this.state.filter,
                    this.state.Products
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <h1></h1>
        <Footer />
      </div>
    )
  }
}

export default Practica
