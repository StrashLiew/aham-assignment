import React from 'react'
import './Card.css'
import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
    const [customers, setCustomers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

    const [customerData, setCustomerData] = useState({
          first_name: "",
          last_name: "",
          email: "",
          phone_no: "",
          address: "",
      });
      
      const handleChange = (e) => {
          setCustomerData({ ...customerData, [e.target.name]: e.target.value });
      };


    const fetchCustomers = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:5000/customers`); // Call the API to get user information
        setCustomers(res.data.customers);
        setIsLoading(false);
        console.log(res.data)
        
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
        fetchCustomers();
      }, []);



    const handleDelete = async (id) => {
      try {
        const response = await axios.delete(`http://127.0.0.1:5000/customer/${id}`);
        console.log(response.data);
        await fetchCustomers();

          setCurrentIndex(0);
       

        if(customers.length === 0){
          setIsLoading(true);
        }

      } catch (error) {
        console.error(`Error deleting customer: ${error}`);
      }
    };

    const handleUpdate = async () => {
      try {
        const response = await axios.put(`http://127.0.0.1:5000/customer/${id}`, customerData);
        console.log(response.data);
        fetchCustomers();
        setEditMode(false);
      } catch (error) {
        console.error(`Error updating customer: ${error}`);
      }
    };

    const handleEditMode = () => {
      setCustomerData(customers[currentIndex]);
      setEditMode(true);
    };

    const nextCustomer = () => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === customers.length - 1 ? 0 : prevIndex + 1;
      });
    };
  
    const previousCustomer = () => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === 0 ? customers.length - 1 : prevIndex - 1;
      });
    };
    
    if (isLoading) {
        return <div>Loading...</div>;
      }

    const { id, first_name, last_name, phone_no, email, address } = customers[currentIndex]; // Assuming these fields exist
      
    return (
      <div className="card">
        <div className="arrow arrow-left" onClick={previousCustomer}><div></div></div>
        <div>
          {editMode ? (
            <div>
              <input
                type="text"
                name="first_name"
                value={customerData.first_name} // Changed from first_name
                onChange={handleChange}
                className="formbold-form-input"
              />
              <input
                type="text"
                name="last_name"
                value={customerData.last_name} // Changed from last_name
                onChange={handleChange}
                className="formbold-form-input"
              />
            </div>
          ) : (
            <h2 className="customer-name">{first_name} {last_name}</h2>
          )}
          <div className="list-group">
            <label className="list-group-title">Email: </label>
            {editMode ? <input value={customerData.email} onChange={handleChange} name="email" /> : <label className="list-group-item">{email}</label>}
          </div>
          <div className="list-group">
            <label className="list-group-title">Phone Number: </label>
            {editMode ? <input value={customerData.phone_no} onChange={handleChange} name="phone_no" /> : <label className="list-group-item">{phone_no}</label>}
          </div>
          <div className="list-group">
            <label className="list-group-title">Address: </label>
            {editMode ? <textarea value={customerData.address} onChange={handleChange} name="address" /> : <label className="list-group-item">{address}</label>}
          </div>
          {editMode ? (
            <div className="form-btn">
              <button className="formbold-btn"  onClick={handleUpdate}>Confirm</button>
              <button className="formbold-btn"  onClick={() => setEditMode(false)}>Back</button>
            </div>
          ) : (
            <div className="form-btn">
              <button className="formbold-btn" onClick={handleEditMode}>Update</button>
              <button className="formbold-btn" onClick={() => handleDelete(id)}>Delete</button>
            </div>
          )}
        </div>
        <div className="arrow arrow-right" onClick={nextCustomer}><div></div></div>
      </div>
    );
  };

export default Card