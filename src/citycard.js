import './App.css';
import React from 'react';
function Citycard (props){
    return(
        <div>
            <div className='city-section-text-part'>
                <p className='Improve-title'>Improve the lives of million. Change yours forever</p>
                <p className='Improve-text'>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>
            <div className='grid'>
                {props.city.map(el=><div className='grid-cards'>
                    <a href='#'><img className='city-img' src={el.img}></img></a>
                    <p className='city-desc'>{el.title}</p>
                    <div className='btn'>
                    <button className='boutton'>{el.button}</button></div>
                    </div>)}
            </div>
        </div>
    )
}
export default Citycard