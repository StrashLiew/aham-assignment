import React from 'react'
import { useState } from "react";
import axios from "axios";
import './RegisterForm.css';
const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: ""
      });
    
      const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
      };
      
      const handleSubmit = (e) => {
        axios.post('http://127.0.0.1:5000/customer', formData)
        .then(response => {
          console.log(response.data);
          // You may want to clear the form fields here
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: ""
          });
        })
        .catch(error => {
          console.error(`Error adding customer: ${error}`);
        });
      };
    
      return (
        <form onSubmit={handleSubmit}>

    <h1 className='register-form'>Register New Customer</h1>
    <div className="formbold-mb-5">
        <label for="name" className="formbold-form-label"> First Name </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          className="formbold-form-input"
          onChange={handleChange}
        />
      </div>

      <div className="formbold-mb-5">
        <label for="name" className="formbold-form-label"> Last Name </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          className="formbold-form-input"
          onChange={handleChange}
        />
      </div>

      <div className="formbold-mb-5">
        <label for="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. example@email.com"
          className="formbold-form-input"
          onChange={handleChange}
        />
      </div>

      <div className="formbold-mb-5">
        <label for="subject" className="formbold-form-label"> Phone Number </label>
        <input
          type="text"
          name="phone_no"
          id="phone_no"
          placeholder="e.g. 0123456789"
          className="formbold-form-input"
          onChange={handleChange}
        />
      </div>

      <div className="formbold-mb-5">
        <label for="message" className="formbold-form-label"> Address </label>
        <textarea
          rows="6"
          name="address"
          id="address"
          placeholder="e.g. 123 Jalan ABC, 12345 Kuala Lumpur"
          className="formbold-form-input"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-btn">
        <button className="formbold-btn">Register</button>
      </div>

        </form>
      );
}

export default RegisterForm