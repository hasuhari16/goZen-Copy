import React from 'react';
import './Home.css';
import { Router } from 'react-router-dom';
import SignUp from './SignUp';
function Home() {
  return (
    <>
    <header>
      <div className='row'>
              <div className='col-sm-5'>
                  <p>Boost Sales, Increase Customer Value, and Grow Your Business</p>
                  
                </div>

              <div className='col-sm-3'>
                  <input className='ip' type='email' placeholder='Enter Your Email Address'></input>
              </div>
              
              <div className='col-sm-2'>
                 <a href='/sign-up'><button className='MB-btn'>Free Sign Up</button></a>
              </div>
              <div className='col-sm-2'>
                  <p className='crd'><i class="fa fa-check" aria-hidden="true"></i> No credit card required</p>
              </div>   
      </div>
    </header>
    
    <section className='LB-cont'>
      
      <div className='nav'>
              <img className='logo' src={require("./images/logo.webp")} aria-label='gozen'></img>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Compare Us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Solutions</a>
                   <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Ecommerce</a>
                    <a class="dropdown-item" href="#">Gaming</a>
                    <a class="dropdown-item" href="#">Personal Care</a>
                    <a class="dropdown-item" href="#">Real Estate</a>
                    <a class="dropdown-item" href="#">Software</a>
                    <a class="dropdown-item" href="#">Accountancy</a>
                    <a class="dropdown-item" href="#">Photography</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Resources</a>
                   <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Blog</a>
                    <a class="dropdown-item" href="#">Marketing 101</a>
                    <a class="dropdown-item" href="#">Docs</a>
                    <a class="dropdown-item" href="#">E-Book</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              
                <li>
                  <a href='/sign-up'><button className='btn btn-primary' >Free Sign Up</button></a>
                  </li>
                <li>
                  <button className='lg-btn' >Login</button>
                </li>
              </ul>
      </div>
      <h1 className='Email-heading'>Email Marketing Software To Automate Your Outreach And Increase Revenue</h1>
      <h4 className='Boost-heading'>Boost Sales, Increase Customer Value, and Grow Your Business with the most Personalized Email Marketing Software customized for every industry.</h4>
      <centre><img className='email-marketing' src={require("./images/home_banners.webp")}></img></centre>
      <div className='reviews'>
          <h3>Reviews For Our <span style={{color:'#2563EB'}} >Brand</span></h3>
      </div>

      <div className='review-cont'>
        <div className='rating'>
          <div>
            <img className='star' src={require("./images/rating.png")}></img>5.0
            <img className='brand' src={require("./images/wordpress.webp")}></img>

          </div>
        </div>
        <div className='rating'>
        <div>
            <img className='star' src={require("./images/rating.png")}></img>5.0
            <img className='brand' src={require("./images/crowd.webp")}></img>
          </div>
        </div>
       
        <div className='rating'>
        <div>
            <img className='star' src={require("./images/rating.png")}></img>4.8
            <img className='brand' src={require("./images/appsumologo.webp")}></img>
          </div>
        </div>
        <div className='rating'>
        <div>    
            <img className='star' src={require("./images/rating.png")}></img>5.0
            <img className='brand' src={require("./images/capterra.webp")}></img>
          </div></div>

        <div className='rating'>
        <div>
            <img className='star' src={require("./images/rating.png")}></img>5.0
            <img className='brand' src={require("./images/crozdesk.webp")}></img>
        
          </div>
        </div>
        <div className='rating'>
        <div>
            <img className='star' src={require("./images/rating.png")}></img>5.0
            <img className='brand' src={require("./images/wphive.webp")}></img>
          </div>
        </div>
      </div>
   
    
        <footer>
            <div className='foot-logo'>
                    <img className='logo' src='https://gozen.io/static/91d36dbd343f58b1adefe6c4e0417f6b/02838/logo-white-gozen.webp' alt='gozen'></img>
                    <p style={{fontSize:'15px',paddingTop:'5%'}}>Welp, you've reached the sitemap area. Still not convinced? Use the links to the right for an in-depth view of features, pricing, or learn marketing with curated educational content. 
                              Or check out our socials for the latest updates!</p>
                    <div className='social-media' style={{marginLeft:'-10px'}}>
                      <h5 style={{paddingLeft:'3%'}}>Follow Us</h5>
                      <a href='https://www.facebook.com/GoZen-110782234796839'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                      <a href='https://www.instagram.com/gozen_tech/'><i class="fa fa-instagram  " aria-hidden="true"></i></a>
                      <a href='https://twitter.com/GoZen_Tech'><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                      <a href='https://www.linkedin.com/company/gozengrowth/'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                      <a href='https://www.reddit.com/r/GoZen/'><i class="fa fa-reddit-square" aria-hidden="true"></i></a>

                    </div>
              </div>

              <div className='foot-cont'>
                <h3>Our Solutions</h3>
                <ul className='sol-list'>
                  <li><a href='https://optinly.com/'>Optinly:<p>No-code intelligent messaging platform</p></a></li>
                  <li><a href='https://gozen.io/'>Gozen Growth:<p>Outcome-driven email marketing and automation platform</p></a></li>
                  <li><a href='https://gozen.io/solutions/ecommerce/'>Ecommerce</a></li>
                  <li><a href='https://gozen.io/solutions/gaming/'>Gaming</a></li>
                  <li><a href='https://gozen.io/solutions/personalcare/'>Personal Care</a></li>
                  <li><a href='https://gozen.io/solutions/realestate/'>Real Estate</a></li>
                  <li><a href='https://gozen.io/solutions/software/'>Software</a></li>
                  <li><a href='https://gozen.io/solutions/accountancy/'>Accountancy</a></li>
                  <li><a href='https://gozen.io/solutions/photography/'>Photography</a></li>
                </ul>
              </div>

              <div className='foot-cont'>
                  <h3>Quick Links</h3>
                      <ul className='q-list'>
                      <li><a href='https://gozen.io/forms/'>Gozen Forms</a></li>
                        <li><a href='https://gozen.io/email-marketing-software/'>Email Marketing</a></li>
                        <li><a href='https://gozen.io/marketing-automation/'>Marketing automation</a></li> 
                        <li><a href='https://gozen.io/blog/'>Blog</a></li> 
                        <li><a href='https://docs.gozen.io/docs/getting-started/gozen-growth'>Docs</a></li> 
                        <li><a href='https://gozen.io/glossary/'>Marketing 101</a></li>
                        <li><a href='https://gozen.io/ebook/'>E-Book</a></li>
                        <li><a href='https://gozen.io/ecommerce-email-automation/'>E-Commerce Email Automation</a></li>
                      </ul>
              </div>

              <div className='foot-cont'>
              <h3>About</h3>
                <ul className='abt-list'>
                <li><a href='https://gozen.io/culture'>About Us</a></li> 
                <li><a href='https://gozen.io/hire'>We Are Hiring</a></li> 
                <li><a href='https://gozen.io/#features'>Features</a></li> 
                <li><a href='https://gozen.io/#compare-us'>Compare Us</a></li> 
                <li><a href='https://gozen.io/#pricing'>Pricing</a></li> 
                <li><a href='https://gozen.io/affiliate/'>Affiliate Program</a></li> 
                <li><a href='https://gozen.io/terms-condition/'>Terms and Conditions</a></li> 
                <li><a href='https://gozen.io/privacy-policy/'>Privacy Policy</a></li> 
                </ul>
              </div>
           
        </footer>
        </section>
    
    
    </>
    
  );
}

export default Home;
