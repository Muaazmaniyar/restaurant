import React from 'react'
import "./Main.css"
import First from './First'
import Second from './Second'
import Sdata from './Sdata'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'

export default function Main() {
  return (
    <>
      <div className="container-fluid" id='a1'>
        <First/>
        <div style={{display:"flex"}}>

          <Second logo={Sdata[0].pic} h={Sdata[0].Heading} p={Sdata[0].para}/>
          <Second logo={Sdata[1].pic} h={Sdata[1].Heading} p={Sdata[1].para}/>
          <Second logo={Sdata[2].pic} h={Sdata[2].Heading} p={Sdata[2].para}/>
          <Second logo={Sdata[3].pic} h={Sdata[3].Heading} p={Sdata[3].para}/>
      </div>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
      </div>
      
    </>
  )
}
