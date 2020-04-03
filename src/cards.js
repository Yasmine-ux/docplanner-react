import './App.css';
import React from 'react';

function Cards (props){
    return (
        <div className='section2'>
            {props.cards.map((el)=>
            <div className='cards' >
                <p className='div-titre'>{el.title}</p>
                <p className='div-txt'>{el.slogon}</p>
                <div className='country-selection'>{el.select ? 
                <select id="choose-country">
                <option>{el.select}</option>
                    <option value="#">Argentina</option>
                    <option value="#">Australia</option>
                    <option value="#">Brazil</option>
                    <option value="#">Chile</option>
                    <option value="#">Colombia</option>
                    <option value="#">Czech</option>
                    <option value="#">France</option>
                    <option value="#">Italy</option>
                    <option value="#">Mexico</option>
                    <option value="#">Peru</option>
                    <option value="#">Poland</option>
                    <option value="#">Portugal</option>
                    <option value="#">Spain</option>
                    <option value="#">Turkey</option>
                    <option value="#">UK</option>
                </select>
                : null}</div>
                <img className='image' src={el.src}></img>
            </div>
            )}
        </div>
    )
  }
  export default Cards