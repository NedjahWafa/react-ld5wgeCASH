import React, { useState } from 'react';
import './LoginSignup.css';

function Connexion() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!value.trim()) {
      setUsernameError('Nom est requis');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.trim()) {
      setEmailError('Email est requis');
    } else if (!value.includes('@')) {
      setEmailError('Format d\'email invalide');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value.trim()) {
      setPasswordError('Le mot de passe est requis');
    } else if (value.length < 6) {
      setPasswordError('Le mot de passe doit contenir au moins 6 caractères');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting
    if (!username || !email || !password || usernameError || emailError || passwordError) {
      alert('Veuillez corriger les erreurs avant de soumettre');
      return;
    }
    // Proceed with form submission
    console.log('Form submitted');
  };

  return (
    <div className='body1'>
      <div className='container'>
        <div className='text1'>
          <div className='text'>S'inscrire</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='Inputs'>
            <div className={`Input ${usernameError ? 'error' : ''}`}>
              <input
                type='text'
                placeholder='Nom'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div> {usernameError && <p className='error-message'>{usernameError}</p>}</div>
            <div className={`Input ${emailError ? 'error' : ''}`}>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
               
            </div>
            <div>{emailError && <p className='error-email'>{emailError}</p>}</div>
            <div className={`Input ${passwordError ? 'error' : ''}`}>
              <input
                type='password'
                placeholder='Mot de passe'
                value={password}
                onChange={handlePasswordChange}
              />
              
            </div>
            <div>{passwordError && <p className='error-pass'>{passwordError}</p>}</div>
          </div>
          <br />
          <button type='submit' className='submit'>S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
