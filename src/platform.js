import './App.css';
import React from 'react';

function Platform (props) {
    return (
        <section className='box-section'>
            <div className='world'>
                <p className='section-box-title'>The world's <br></br>biggest health care platform</p>
                <p className='section-box-text'>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</p>
                <img src='https://www.docplanner.com/img/logo.png' className="big-logo"></img>
            </div>
            <div class="box">
               {props.box.map(el =><div className="boxes">
                <img className="img-box" src={el.img} alt="image"/>
                <h3>{el.title}</h3>
                <p>{el.text}</p> 
                </div>)}
                </div>
        </section>
    )
}
export default Platform 