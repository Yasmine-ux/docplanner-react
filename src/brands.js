import './App.css';
import React from 'react';
import logo from './brandslogo.svg';
import logo2 from './brand2.svg';
import logo3 from './brand3.svg';
import logo4 from './brand4.svg';
import logo5 from './brand5.svg';
function Brands (props) {
    return (
        <div>
            {props.brands.map((el)=>
            <div className='brand-container'>
                <p className='slogon-title'>{el.titre}</p>
                <ul className='brandlogo'>
                    <li className='brands'><a href='#' ><img className='brand-img' src={logo} alt='logo'/></a></li>
                    <li className='brands'> <a href='#' ><img className='brand-img' src={logo2} alt='logo'/></a></li>
                    <li className='brands'> <a href='#' ><img className='brand-img' src={logo3} alt='logo'/></a></li>
                    <li className='brands'> <a href='#' ><img className='brand-img' src={logo4} alt='logo'/></a></li><br></br>
                    <li className='brands'> <a href='#' ><img className='brand-img' id='lastlogo' src={logo5} alt='logo'/></a></li>
                </ul>
            </div>
            )}
        </div>
    )
}
export default Brands 