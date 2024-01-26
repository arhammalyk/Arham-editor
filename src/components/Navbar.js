import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const[showbutton,setshowbutton]=useState(true)
  const[showbutton2,setshowbutton2]=useState(true)

  const click=()=>{
    if(props.mode==='banana')
    {
      setshowbutton(true)
    }
    if(props.mode==='light')
    {
      setshowbutton(false)
    }

  }
  const click2=()=>{
    if(props.mode==='dark')
    {
      setshowbutton2(true)
    }
    if(props.mode==='light')
    {
      setshowbutton2(false)
    }

  }
  
  // const modeclick=()=>{
  //   setshowbutton(false)
  // }

  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
<Link className="navbar-brand" to="/">{props.texttitle}</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/about">{props.about}</Link>
    </li>
    </ul>

         {showbutton2 && <div className={`form-check form-switch text-${props.mode==='light' || props.mode==='banana' 
        ? 'dark':'light'}`}>
        <input onClick={()=>{props.bananamode();click()}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Banana Mode</label>
          </div> }
        
          {showbutton && <div className={` mx-3 form-check form-switch text-${props.mode==='light' || 
          props.mode==='banana' ? 'dark':'light'}`}>
        <input onClick={()=>{props.changemode();click2()}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to Dark Mode</label>
          </div>}
</div>
</div>
</nav>
  )
}
Navbar.propTypes={
    texttitle: PropTypes.string,
    about:PropTypes.string
}
Navbar.defaultProps={
    texttitle:'default title',
    about:'default about'
}


export default Navbar
