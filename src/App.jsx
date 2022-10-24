import React from 'react';
import "./App.css"
import Hero from "./illustration-hero.svg";
import music_icon from "./icon-music.svg";
function App(){
  return(<>
  <div className='container'>
   <div className="sub-container">
   <img className="Hero" src= {Hero} alt="imgphoto" />
   <div className='text'>
    <h1>Order Summary</h1>
    <p>You can now listen millions of songs,audiobooks and prodcasts on any device anywhere you like!</p>
   </div>
   <div className="annualplan">
    <div className='firstchild'><img src={music_icon} alt="songbutton" /></div>
    <div className='secondchild'> <div>Annual plan</div><span style={{color:"#777A8A"}}>$59.99/year</span></div>
    <div className='thirdchild'>change</div>
   </div>
   <div className="payment" >Proceed to Payment</div>
   <div className="cancel_order"><b>Cancel Order</b></div>
   </div>
  </div>
  </>)
} 
export default App;