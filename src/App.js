import React, { Component } from "react"
import { Products } from "./data/index.json"

import Buscador from "./components/practica/Buscador"

import Logo from "./assets/img/logo.jpg"
import Logo2 from "./assets/img/HeaderHomeAbril.gif"
import "./index.css"
import "./assets/fontello/css/fontello.css"

import Menu from "./components/Menu"
import DropDown from "./components/Menu/DropDown"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

//import Listproduct from '../products/Product'
import ListProducts from "./components/products/ListProduct"

class App extends Component {
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
    this.handleOnDrop = this.handleOnDrop.bind(this)
  }

  handleOnDrop() {
    let menu = document.getElementById("menu")
    let mostrarMenu = document.getElementById("drop")

    menu.addEventListener("click", () => {
      mostrarMenu.classList.toggle("toggle")
    })
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
    document.getElementById("imge").addEventListener("mouseover", mouseOver)
    document.getElementById("imge").addEventListener("mouseout", mouseOut)

    function mouseOver() {
      document.getElementById("price").className = "over-price"
    }

    function mouseOut() {
      document.getElementById("price").classList.remove("over-price")
    }
  }

  handleOfert() {
    let i = 0
    let producto = document.getElementsByClassName("card")

    for (i = 0; i < producto.length; i++) {
      if (i % 2 === 0) {
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

  componentDidMount() {
    this.handleOfert()
    this.handleSlider()
    this.handleColor()
    //this.handleOnDrop();
    //this.handleOnReq();
  }

  render() {
    return (
      <div className="content">
        <header className="header">
          <div className="content-header">
            <ul className="helpers">
              <li className="helper">
                {" "}
                <span className="icon-pinboard" /> SUCURSALES
              </li>
              <li className="helper">
                <span className="icon-tag" /> COMO COMPRAR
              </li>
              <li className="helper">MIS PEDIDOS</li>
            </ul>
            <div className="logo">
              <div className="logo-fizz">
                <img
                  style={{ width: "100%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuO8vgYxWXlTeRWwsFxInN_c-8FudwGWwKrWqPtoOGtMoLjIhy&usqp=CAU"
                  className="fizz"
                  alt=" logo"
                />{" "}
              </div>
              <Buscador onSearch={this.hadleOnSearch} />
              <img src={Logo2} className="logo2" alt=" logo2" />
            </div>
          </div>
          <DropDown onDrop={this.handleOnDrop} />
        </header>
        <Menu />
        <Banner />
        <section>
          <div className="wraper">
            <div className="content-grid">
              <div className="filtro">
                <ul className="filtro-list">
                  <p className="filtro-title"> FILTRO POR</p>
                  <li className="filtro-item active-item">
                    <h3>
                      {" "}
                      SEXO <span className="icon-angle-circled-down" />{" "}
                    </h3>{" "}
                    <ul className="sub-list">
                      <li className="filtro-link">
                        <input type="checkbox" /> hombre{" "}
                      </li>
                      <li className="filtro-link">
                        {" "}
                        <input type="checkbox" /> mujer{" "}
                      </li>
                      <li className="filtro-link">
                        {" "}
                        <input type="checkbox" /> niños{" "}
                      </li>
                    </ul>{" "}
                  </li>
                  <li className="filtro-item">
                    {" "}
                    <h3>DEPORTE </h3>
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

export default App
