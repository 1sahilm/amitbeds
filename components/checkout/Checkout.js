
import React, { Component, useState } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import Image from "next/image/";



export default function Checkout({addToCartHandler , price , title, base_price,size , bedColor,StorageColorName,headboardColorName,feetColorName, mattressColorName }) {
    

const[click,setClick] = useState(false);
//   componentWillMount() {
//     // sets the initial state
//     this.setState({
//       isMenuOpened: false
//     });
//   }

const handleClick = () => {
    setClick(!click)
}

 
    return (
      <OffCanvas
        width={450}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={click}
        position={"right"}
      >
        <OffCanvasBody
           
          className="add-to-basket"
        >
          <br/>
          
            <a href="#" onClick={handleClick}>
              ADD TO BASKET
            </a>{" "}
             
        
        </OffCanvasBody>
        <OffCanvasMenu  className="items-cart">
        <a href="#" onClick={handleClick}>
                Close
              </a>
          <h3>{title}-(£{base_price})</h3>
          <div className="bg-white">
              <div className="checkout-text">
              <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
              <ul className="checkout-ul">
                  <li> <span style={{color:"#000"}}> Bed Size = {size} </span></li>
                  <li> <span style={{color:"#000"}}>Bed Color : {bedColor} </span></li>
                  <li><span style={{color:"#000"}}>Storage : {StorageColorName} </span></li>
                  <li><span style={{color:"#000"}}>Headboard : {headboardColorName} </span></li>
                  <li><span style={{color:"#000"}}>Feet : {feetColorName} </span></li>
                  <li><span style={{color:"#000"}}>Mattressess : {mattressColorName} </span></li>

              </ul>
              <div>
                  <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
              </div>
              </div>
            

          </div>
          <br/>
          <br/>

          <div className="check-price-box">
              <div className="container">
                  <div className="row">
                      <div className="col-md-5">
                      <h5>Basket total</h5>
                      </div>
                      <div className="col-md-7" >
                      <h4 style={{float:"right"}}>£{price}</h4>
                      </div>

                  </div>
                  <div className="checkout-button">
                  <span  onClick={addToCartHandler} >
              CHECKOUT
            </span>
                  </div>


              </div>

          </div>
          <br/>
 
          <div className="text-center">
              <p>Or</p>
              <h5 style={{color:"#e36293"}}>Continue Shopping</h5>
              
              

          </div>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

 
