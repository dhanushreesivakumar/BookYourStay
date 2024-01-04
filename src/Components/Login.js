// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false); // New state for overall form validity

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|biz|net)$/i;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    let isEmailValid = true;
    let isPasswordValid = true;

    if (!email) {
      setEmailError('Please enter your email.');
      isEmailValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Invalid email. Please enter a valid email.');
      isEmailValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isPasswordValid = false;
    } else if (password.length !== 8) {
      setPasswordError('Password should be exactly 8 characters.');
      isPasswordValid = false;
    } else if (!passwordPattern.test(password)) {
      setPasswordError(
        'Invalid password. Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      isPasswordValid = false;
    } else {
      setPasswordError('');
    }

    // Update the overall form validity state
    setFormValid(isEmailValid && isPasswordValid);

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);

      // Add your logic to move to the next page here
    }
  };

  const handleGoogleLogin = () => {
    // Google login logic
  };

  const handleFacebookLogin = () => {
    // Facebook login logic
  };

  return (
    <div className="whole">
      <div className="login-container">
        <div className="login-box">
          <h3>
            <RiLoginCircleFill /> Login
          </h3>
          <form onSubmit={handleSubmit}>
            <br />

            <div className="input-container">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input1"
              />
            </div>
            {emailError && <span>{emailError}</span>}

            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input1"
              />
            </div>
            {passwordError && <span>{passwordError}</span>}

            <div className="button-group">
              <button type="submit" className="but" disabled={!formValid}>
                <Link to="/">
                  <button className="btn5">Login</button>
                </Link>
              </button>
              <a href="#">
                <TbPasswordFingerprint /> Forgot password?
              </a>
            </div>
            <h2>
              Don't have an account?<Link to="/signup">signup</Link>
            </h2>
          </form>
          <div className="button-container">
            <p>or</p>
            <button onClick={handleGoogleLogin} className="bt">
              Continue with Google
            </button>
            <br />
            <br />
            <button onClick={handleFacebookLogin} className="bt1">
              Continue with Facebook
            </button>
          </div>
        </div>
        <footer>
          <center>
            <p>
              Copyright ©{' '}
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Your Website
              </a>{' '}
              {new Date().getFullYear()}.
            </p>
          </center>
        </footer>
      </div>
    </div>
  );
}

export default Login;
