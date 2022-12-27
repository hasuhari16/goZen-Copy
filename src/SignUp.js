import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './signUp.css';
class SignUp extends React.Component{
    render() { 
        return (  
            <div className='LogIn'>
                    <div className='img-cont'>
                        <img className='gozen' src={require("./images/goZen-S-logo.png")}></img>
                        <img  className='sign' src={require("./images/blueBoard.png")}></img>
                        <h3>Ready to Grow Your Business?</h3>
                        <p>Industry-specific solutions, unbelievable conversion rate, an exhaustive template gallery, and more. 
                            We've got all your Email Marketing needs covered.
                        </p>
                    </div>

            {/* ======================================================================== */}
            
                    <div className='form-cont'>
                        <div className='content'>
                            <h4>Welcome To GozenGrowth</h4>
                            <span>Let's get started!</span>
                        </div>
                        <div className='input-cont'>
                            <div className='name-input'>
                                <input className='in-name' placeholder='First Name' type='text'></input>
                                <input className='in-name' placeholder='Second Name' type='text'></input>
                            </div>
                            <input className='in-id' placeholder='Email Address'type='email'></input>
                            <input  className='in-id'placeholder='Password' type='password'></input>                    
                        </div>  

                        <div className='terms'>
                            <input className='in-check' type='checkbox'></input>
                            <span>By clicking, I agree to the</span>
                            <a href='https://gozen.io/terms-condition/'>Terms and Conditions</a>
                        </div>

                        <div className='submit-cont'>
                                <button type='submit' className='reg-btn'>Register now</button>
                                <span>No Credit card required*</span>
                                <button className='google-btn'><img src={require('./images/Glogo.jfif')} height={36}></img> Sign up with Google</button>
                                <span>Already have an account?<a href='https://app.gozen.io/login'>Login</a></span>
                         </div>

                    </div>
                
            </div>
        );
    }
}
 
export default SignUp;