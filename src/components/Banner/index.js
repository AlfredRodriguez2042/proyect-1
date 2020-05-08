import React, {Component} from 'react'
import Baner1 from '../../assets/img/racing-980x400.jpg'
import Baner2 from '../../assets/img/evoACCURACY_980x400px.jpg'
import BannerLogos from '../../assets/img/marcas.jpg'



class Banner extends Component{
   constructor(props){
      super(props)
      this.state = {
           'texto': []

      }
      this.handleOnReq = this.handleOnReq.bind(this)
      
   }

   
  
   handleOnReq (){
   
      let fotos =`https://picsum.photos/list`

      let fizz = "http://remote.fizzmod.com/ajax.php";
      fetch(fizz)
      .then(res =>  res.text())
      .then(data=>  document.getElementById('api').innerHTML = data,
                    document.getElementById('hide').style.display = 'none')
      //.then(res => this.setState({'texto': res}) )
      .catch( res=>console.log(res) )
        
    
   }
  componentDidMount(){
   
  }

render(){
    return(
        <div className="banner-content">
               <div className="slider">
               <div className="slide">
                  <img src={Baner1} alt=" portada1" />
               </div>
               <div className="slide">
                  <img src={Baner2} alt=" portada3" />
               </div>
               <div className="slide">
                  <img src={Baner1} alt=" portada2"/>
               </div>
               <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
               </div>
              
               </div>
               <div className="sub-banner"  id="hide" onClick={this.handleOnReq} >
              
                 <img src={BannerLogos}/>
               </div>
                <h2 id="api"></h2>
             </div>
    );
}
}

export default Banner