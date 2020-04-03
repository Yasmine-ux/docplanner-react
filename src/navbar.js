import React from 'react'
import './App.css';
function Navbar(props){
    const Navcontainer = props.navcontainer
  let tableau = Navcontainer.map((element,i)=>
           <li key={i} className='list'><a className="nav-link" href={element.ref}>{element.name}</a>{element.drop ?
           <ul className="dropdown-content">{element.drop.map((el,j) =><li key={j}><a className="dropdown-button" href={el.ref}>{el.name}</a></li>)} </ul> : null}
           </li>)
  return tableau;
  }
  export default Navbar