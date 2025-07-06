import React from 'react'
import "./Fifth.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot,faBurger,faUtensils} from '@fortawesome/free-solid-svg-icons'
import a from "./images/menu-1.jpg"
import b from "./images/menu-2.jpg"
import c from "./images/menu-3.jpg"
import e from "./images/menu-5.jpg"
import f from "./images/menu-6.jpg"
import g from "./images/menu-7.jpg"
import h from "./images/menu-8.jpg"
export default function Fifth() {
  return (
    <>
      <div classNameName='container-fluid' id='f1'>
        <div classNameName='row top' >
          <ul className="nav nav-tabs active" style={{justifyContent:"center"}}>
  <li className="nav-item" >
    <a className="nav-link" href="#tab-1" ><FontAwesomeIcon icon={faMugHot} style={{color: "#FFD43B", height:"40px", width:"50px"}} /> 
    Popular<h4 style={{marginLeft:"50px", color:"black"}}>Breakfast</h4></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#tab-2"><FontAwesomeIcon icon={faBurger} style={{color: "#FFD43B", height:"40px", width:"50px"}} /> 
    Special<h4 style={{marginLeft:"50px",color:"black"}}>Lunch</h4></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#tab-3"><FontAwesomeIcon icon={faUtensils} style={{color: "#FFD43B",height:"40px", width:"50px"}} />
    Lovely<h4 style={{marginLeft:"50px", color:"black"}}>Dinner</h4></a>
  </li>
        </ul>
        </div>
        <div className='content' id='tab-1'>
          <div className='col-6' style={{float:"left"}}>
            <img src={a} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={b} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={c} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={e} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
          </div>
          <div className='col-6' style={{float:"left"}}>
            <img src={f} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={g} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={h} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
            <img src={f} alt="logo" style={{float:"left"}}/>
            <div style={{marginLeft:"100px", width:"67%"}}>
            <h4 style={{color:"black", fontWeight:"bold"}}> Chicken Burger <h3 style={{float:"right", color:"orange", fontWeight:"bold"}}>$115</h3></h4><hr/>
            <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
