import React from 'react'
import "./First.css"
import a from "./images/restoranlogo.jpg"
import b from "./images/bg-hero.jpg"
import c from "./images/hero.png"
export default function First() {
  return (
    <>
    <div id='a2'>
      <div className='row'><img src={b} height={700} style={{opacity:"0.1",position:"absolute",width:"100%"}}/></div>
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark " style={{backgroungColor:"transparent"}}>
  <div className="container-fluid">
    <a className="navbar-brand ms-4" href="javascript:void(0)"><img src={a} height={"45px"} width={"200px"}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto" style={{fontWeight:"500"}}>
        <li className="nav-item" style={{marginLeft:"400px"}}>
          <a className="nav-link" href="javascript:void(0)" style={{color:"orange"}}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">SERVICE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">PAGES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">CONTACT</a>
        </li>
      </ul>
      <button className='btn btn btn-lg me-5' style={{backgroundColor:"orange",color:"white",fontWeight:"500"}}>BOOK A TABLE</button>
    </div>
  </div>
</nav>
    </div>
    
    <div className="row">
      <div className="col-6" style={{position:"relative"}}>
        <div style={{fontSize:"60px", marginTop:"100px", marginLeft:"50px", fontWeight:"bold"}} className="display-3 text-white slideInLeft"><b>Enjoy Our<br/>Delicious Meal</b></div>
        <p style={{marginLeft:"50px",fontWeight:"bold"}} className="text-white mb-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,<br></br> excepturi recusandae qui minus iure quaerat. Quo unde vitae sunt<br></br> asperiores illo numquam, nesciunt itaque error non optio,</p>
        <button className="btn btn btn-lg ms-5" style={{backgroundColor:"orange",color:"white",fontWeight:"500"}}>BOOK A TABLE</button>
      </div>
      <img src={c} alt="round" className="col-6 rot" style={{height:"520px",width:"550px",position:"relative", marginTop:"50px",marginLeft:"20px"}}/>
    </div>
</div>
    </>
  )
}
