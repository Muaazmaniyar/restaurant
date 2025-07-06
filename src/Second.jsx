import React from 'react'
import "./Second.css"
export default function Second(props) {
  return (
    <>
      <div id='s1'>
    <div className="card" id='s2' style={{width:"85%", height:"300px",float:"left", margin:"5px",padding:"20px"}}>
    <img className="card-img-top" src={props.logo} alt="Card" style={{width:"60px", height:"50px", paddingLeft:"15px"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.h}</h4>
      <p className="card-text">{props.p}</p>
    </div>
    </div>
      </div>
    </>
  )
}
