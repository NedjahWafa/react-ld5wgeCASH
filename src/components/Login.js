import React, { useState } from 'react';
import './LoginSignup.css';
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError('required field*');
    } else if (!value.includes('@')) {
      setEmailError(' format Invalid');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting
    if (!email || !password || emailError || passwordError) {
      // Set error messages if fields are empty or have errors
      setEmailError(email ? '' : 'required field*');
      setPasswordError(password ? '' : 'required field*');
      return;
    }
    // Proceed with form submission
    console.log('Form submitted');
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='text1'>
          <div className='text'>Se connecter</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='Inputs'>
            <div className={`Input ${emailError ? 'error' : ''}`}>
              {/* <img src={email_icon} alt=""/> */}
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
            {emailError && <p className='error-message'>{emailError}</p>}
            </div>
            <div className={`Input ${passwordError ? 'error' : ''}`}>
              {/* <img src={password_icon} alt="" /> */}
              <input
                type='password'
                placeholder='Mot de passe'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>{passwordError && <p className='pass-error-message'>{passwordError}</p>}</div>
          </div>
          <div>
            <div className='remember-forgot'>
              <label>
                <input type='checkbox' />Se souvenir de moi
              </label>
            </div>
            <a href='#' className='forgot-password'>
              Mot de passe oublié ?
            </a>
            <br />
            <br />
          </div>
          <button type='submit' className='submit'>
            Se connecter
          </button>
          <div className=''>
            <p className='p1'>
              vous n'avez pas de compte? <a href='#' className='regist'>S'inscrire</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
