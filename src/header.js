import React from 'react'
import './App.css';
function Header(props){
    return (
        <div>
            {props.tableau.map((el)=>
        <div className='section1'>
            <img className='doc-logo' src={el.src} />
            <h1>{el.title}</h1>
            <div className='container'> 
            <p className='text'>{el.text1}</p>
            <p className='text'>{el.text2}</p></div>
        </div>
            )}
        </div>
    )
  }
  export default Header