import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button'
import './Home.css'

const Home = () => {
    let navigate = useNavigate();

    const handleGetStartedClick = () => {
      navigate("/register");
    };
  
    const handleViewCustomersClick = () => {
      navigate("/customer");
    };
  
  return (
    <>
    <div className="home-container">
        <h1 className='home-text'>Welcome to <br></br>Customer Information <br></br>Service Centre</h1>
        <div className="home-btns">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" onClick={handleGetStartedClick}>Get Started</Button>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={handleViewCustomersClick}>View Customers</Button>
        </div>
    </div>

    </>
  )
}

export default Home