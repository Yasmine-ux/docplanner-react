import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import Header from './header.js';
import Cards from './cards.js'; 
import Brands from './brands.js';
import Platform from './platform.js';
import Citycard from './citycard.js';
import Foot from './footer.js';
const tab = [
  {name:'About us', ref:'https://www.home.com/',},
  {name:'Career', ref:'https://www.service.com/',},
  {name:'Departments', ref:'https://www.contact.com/', drop :[
    {name:'Marketing & PR', ref:'https://ent.com/'},
    {name:'Customer sucess & sales', ref:'https://ent.com/'},
    {name:'It, Product and Data', ref:'https://ent.com/'},
    {name : 'Finance & Administration', ref:'http://ent.com/'},
    {name : 'HR & more', ref:'http://ent.com/'}
  ]}]
const head = [{src : 'https://www.docplanner.com/img/sygnet.png', title : 'Making the health care experience more human' , text1: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.", text2 : "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}]
const card1 = [{title: 'For patients' , slogon : 'Find a doctor, book a visit and solve any health-related doubt', src :'https://www.docplanner.com/img/screen-marketplace@2x.png', select:'CHOOSE COUNTRY'}]
const card2 =[{title : 'For doctors', slogon : 'Save time managing visits and cut no-shows by half', src :"https://www.docplanner.com/img/screen-saas@2x.png"}]
const brand = [{titre : 'We are a global company with local culture'}]
const boxes = [{img:"https://www.docplanner.com/img/flag.png",title:"Leader in 10 countries",text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
{img:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",text:"visit us every month"},
{img:"https://www.docplanner.com/img/visits.png",title:"1.5 million appointments",text:"booked last month"},
{img:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",text:"trust in our solutions"}]
const cities=[{img:"https://www.docplanner.com/images/warsaw.png",title:"Warsaw",button:"See Openning"},
{img:"https://www.docplanner.com/images/barcelona.png",title:"Barcelone",button:"See Openning"},
{img:"https://www.docplanner.com/images/istanbul.png",title:"Istanbul",button:"See Openning"},
{img:"https://www.docplanner.com/images/rome.png",title:"Rome",button:"See Openning"},
{img:"https://www.docplanner.com/images/mexico-city.png",title:"Mexico City",button:"See Openning"},
{img:"https://www.docplanner.com/images/curitiba.png",title:"Curitiba",button:"See Openning"}]
function App() {
  return (
    <div>
      <div className='nav-bar'>
      <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
      <ul className='nav-list'>
      <Navbar navcontainer={tab} />
      </ul>
      </div>
      <Header tableau={head}/>
      <div className='section2'>
      <Cards cards={card1}/>
      <Cards cards={card2}/>
      </div>
      <Brands brands={brand}/>
      <Platform box={boxes}/>
      <Citycard city={cities}/>
      <Foot/>
    </div>
  );
}

export default App;
