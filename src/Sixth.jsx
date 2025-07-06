import React from 'react'
import "./Sixth.css"
import a from "./videos/video.jpg"
export default function Sixth() {
  return (
    <>
      <div className='container-fluid' style={{height:"500px", width:"100%", backgroundColor:"grey"}}>
        <div className='col-6' style={{float:"left"}}>
            <video src={a} alt="logo" height={"500px"}>
            </video>
        </div>
        <div className='col-6' style={{float:"left",}}>
          <h4 style={{fontWeight:"bold", fontFamily:"cursive", color:"orange", marginLeft:"20px"}}>Reservation ----</h4>
          <h1 style={{fontWeight:"bolder", color:"white" , marginLeft:"20px"}}>Book A Table Online</h1>
        </div>
        <form>
            <div className="row a">
              <div className="col">
                <input type="text" className="form-control-lg" placeholder="Your name" name="name"/>
              </div>
              <div className="col">
                <input type="date" className="form-control-lg" placeholder="Your Email" name="email"/>
              </div>
            </div>
            <br></br>
            <div className="row a">
              <div className="col">
                <input type="text" className="form-control-lg datetimepicker-input" placeholder=" " name="name"/>
              </div>
              <div className="col">
                <input type="text" className="form-control-lg datetimepicker-input" placeholder="date & time" name="email"/>
              </div>
            </div>
        </form>
      </div>
    </>
  )
}
