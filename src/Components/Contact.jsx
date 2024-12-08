import React from "react";
import MainImage from '../assets/main-image.svg'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



function Contact() {

  function submitForm(event){

    event.preventDefault()
    console.log(event)

  }


  return (
    <>

      <div className="container">
        <div className="headings-main">
          <h1>Contact Us</h1>
          <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU 
            HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH
            THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
          </p>
        </div>
      </div>


      <div className="container contact-area">
        <div className="left-section">
          
          <div className="btns">
            <button className="primary-btn">
              <MdMessage fontSize={'20px'}/>
              VIA SUPPORT CHAT
            </button>
            <button className="primary-btn">
              <FaPhoneAlt fontSize={'16px'}/>
              VIA CALL
            </button>

          </div>

          <div> 
            <button className="secondary-btn">VIA EMAIL FORM</button>
          </div>

           <form onSubmit={submitForm} className="form">

             <div className="form-control">
                <label className="text-label">Name</label>
                <input type="text" /> 
             </div>

            <div className="form-control">
                <label>Email</label>
                <input type="email" />  
            </div>   
              
            <div className="form-control">
                <label>Message</label>
                <textarea rows="6"  cols='61' width="100%"/>  
            </div>




              <div className="submit-btn">
                
              <button type="submit" class="submit primary-btn" onClick={submitForm}> 
                  Submit
              </button>
                
              </div>  


                
            </form> 



        </div>

        <div className="right-section">
          <img src={MainImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
