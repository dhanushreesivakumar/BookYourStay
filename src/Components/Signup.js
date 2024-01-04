
// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import './Signup.css';

function SignUp() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    allowExtraEmails: false,
  });

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.allowExtraEmails) {
      alert('Please agree to the terms and conditions.');
      return; // Stop form submission if checkbox is not ticked
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|biz|net)$/i;
    if (!formData.email) {
      setEmailError('Please enter your email.');
    } else if (!emailPattern.test(formData.email)) {
      setEmailError('Invalid email format. Please enter a valid email.');
    } else {
      setEmailError('');
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8}$/;
    if (!formData.password) {
      setPasswordError('Please enter your password.');
    } else if (formData.password.length !== 8) {
      setPasswordError('Password should be exactly 8 characters.');
    } else if (!passwordPattern.test(formData.password)) {
      setPasswordError(
        'Invalid password. Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
      );
    } else {
      setPasswordError('');
    }

    if (!formData.firstName) {
      setFirstNameError('Please enter your first name.');
    } else {
      setFirstNameError('');
    }

    if (!formData.lastName) {
      setLastNameError('Please enter your Last name.');
    } else {
      setLastNameError('');
    }

    if (!emailError && !passwordError && !firstNameError && !lastNameError) {
      // If there are no errors, redirect to the home page
      console.log('Sign Up successful! Redirecting to the home page.');
      navigate('/home');
      // Replace '/home' with the actual route to your home page
    } else {
      console.log('Sign Up failed. Please check the form for errors.');
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  return (
    <div className='body'>
      <form onSubmit={handleSubmit} className='form'>
      <h5 style={{marginLeft:"200px"}}>Sign Up</h5>
        <div>
          <label htmlFor="firstName" style={{marginLeft:"50px" }}>First Name:</label>
          <FaUserCheck/><input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          /><br/>
          {firstNameError && <span className="error"  style={{marginLeft:"50px"}}>{firstNameError}</span>}
        </div>
        <div>
          <label htmlFor="lastName" style={{marginLeft:"50px"}}>Last Name:</label>
          <FaUserCircle /><input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {lastNameError && <span className="error" style={{marginLeft:"50px"}}>{lastNameError}</span>}
        </div>
        <div>
          <label htmlFor="email" style={{marginLeft:"50px"}}>Email Address:</label>
          < MdEmail/><input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <span className="error"  style={{marginLeft:"50px"}}>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="password" style={{marginLeft:"50px"}}>Password:</label>
          <RiLockPasswordFill /><input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && <span className="error"  style={{marginLeft:"50px"}}>{passwordError}</span>}
        </div>
        <div>
          <input
            type="checkbox"
            id="allowExtraEmails"
            name="allowExtraEmails"
            checked={formData.allowExtraEmails}
            onChange={handleChange}
            style={{marginLeft:"50px"}}
          />
            Accept Terms and Conditions.
        </div>
        <Link to="/"><button type="submit" className='sign'>Sign Up</button></Link>
      <p style={{marginLeft:"50px"}}>
        If already have an account,{' '}
         <Link to="/">< SiGnuprivacyguard/> Login</Link> 
      </p>
      </form>
    </div>
  );
}

export default SignUp;