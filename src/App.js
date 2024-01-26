import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import About from './About';
import { useState } from 'react';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

const[mode,setmode]=useState('light')
const[alert,setalert]=useState(null)

const showalert=(message,type)=>{
  setalert({
    msg: message,
    type: type,
  })
  setTimeout(()=>{
    setalert(null)
  },4000)
}

const bananamode=()=>{
  if(mode==='light')
  {
    setmode('banana')
    document.body.style.backgroundColor='#fffe00'
    showalert('Banana mode has been enabled','success')
    // setInterval(()=>{
    //   document.title='TextEditor-Banana mode'
    // },2000)
  }     
  else{
    setmode('light')
    document.body.style.backgroundColor='white'
    showalert('Light mode has been enabled','success')
    // setInterval(()=>{
    //   document.title='TextEditor-Light mode'
    // },2000)
  }
}


const changemode=()=>{
  if(mode==='light')
  {
    setmode('dark')
    document.body.style.backgroundColor='#272d46'
    showalert('Dark mode has been enabled','success')
    // setInterval(()=>{
    //   document.title='TextEditor-Dark mode'
    // },2000)
  }     
  else{
    setmode('light')
    document.body.style.backgroundColor='white'
    showalert('Light mode has been enabled','success')
    // setInterval(()=>{
    //   document.title='TextEditor-Light mode'
    // },2000)
  }
}
return (
    <>
    <Router>
      <Navbar texttitle='Arham Editor' about='About us' mode={mode} changemode={changemode} bananamode={bananamode} />
      <Alerts alert={alert}/>

      <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Textform formheading="Enter text to analyze"  
            mode={mode} showalert={showalert} />}>
            </Route>
      </Routes>


      {/* <Routes>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/'>      
              <Textform formheading='Enter Text Here To Analyze' mode={mode} showalert={showalert}/> 
            </Route>
      </Routes> */}
      </Router>
    </>
  );
}

export default App;
