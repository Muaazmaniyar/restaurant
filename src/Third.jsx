import React from 'react'
import "./Third.css"
import a from "./images/about-1.jpg"
import b from "./images/about-2.jpg"
import c from "./images/about-3.jpg"
import d from "./images/about-4.jpg"
import e from "./images/Fork and knife.png"
export default function Third() {
  return (
    <>
      <div className='container-fluid t1'>
        <div className='col-6' style={{float:"left"}}>
          <img src={a} alt="1" height={"250px"} width={"250px"} style={{marginLeft:"100px"}}/>
          <img src={b} alt="2" height={"180px"} width={"170px"} style={{marginTop:"72px", marginLeft:"20px"}}/>
          <img src={c} alt="3" height={"180px"} width={"180px"} style={{marginLeft:"170px",marginBottom:"49px"}}/>
          <img src={d} alt="4" height={"250px"} width={"250px"} style={{marginLeft:"20px", marginTop:"20px"}}/>
        </div>
        <div className='col-6' style={{float:"left"}}>
          <h3 style={{color:"orange", fontFamily:"cursive", marginTop:"60px", marginLeft:"30px"}}>---about us---</h3>
          <h1 style={{marginLeft:"30px", fontWeight:"bold"}}>Welcome to <img src={e} alt="mid" height={"40px"} width={"40px"}/> Restoran</h1><br></br>
          <p style={{marginLeft:"30px"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br></br>amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p style={{marginLeft:"30px"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam <br></br>amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita <br></br>duo justo magna dolore erat amet</p>
          <div style={{borderLeft:"solid 6px orange", marginLeft:"30px", height:"60px", float:"left"}}>
            <h1 style={{color:"orange", marginLeft:"20px", fontWeight:"bolder", fontSize:"50px", float:"left"}}>15</h1>
            <p style={{float:"left", marginLeft:"20px", marginTop:"10px"}}>Years of <br></br><span style={{color:"black", fontWeight:"bold"}}>EXPERIENCE</span></p>
          </div>
          <div style={{borderLeft:"solid 6px orange", marginLeft:"30px", height:"60px", float:"left"}}>
            <h1 style={{color:"orange", marginLeft:"20px", fontWeight:"bolder", fontSize:"50px", float:"left"}}>50</h1>
            <p style={{float:"left", marginLeft:"20px", marginTop:"10px"}}>Popular <br></br><span style={{color:"black", fontWeight:"bold"}}>MASTER CHEFS</span></p>
          </div>
          <button className='btn btn btn-lg' style={{ backgroundColor:"orange", color:"white", marginLeft:"45px", marginTop:"40px"}}>Read more</button>
        </div>
      </div>
    </>
  )
}
