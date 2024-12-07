import React from "react";

function Contact() {
  return (
    <>
      <div className="container hero-section">
        <div className="left-section">
          <h1>
            YOUR FEET DESERVE<br></br> THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="primary-btn">Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="available-on">
            <p>Also Available On</p>
            <div className="icons">
              <img src={Flipkart} alt="" />
              <img src={Amazon} alt="" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <img src={ShoeImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
