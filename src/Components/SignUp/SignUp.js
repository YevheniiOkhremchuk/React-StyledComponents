import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/padlock.png';
import '../signComponentsStyle.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [updates, setUpdates] = useState(true);

    const borderColor = (target, RegExp) => {
        if (target.value.match(RegExp)) {
          target.style.border = '2px solid green';
        } else {
          target.style.border = '2px solid red';
        }
    };
      
    const RegExpEmail = /^\S{3,}@[a-z]{2,}\.[a-z]{2,}/i;
    const RegExpPassword = /^\S{8,}/;
    const RegExpName = /^[a-z]{3,}/i;

    const registrationData = (e) => {
        if (e.target.name === 'firstName') {
          setFirstName(e.target.value);
          borderColor(e.target, RegExpName);
        } else if (e.target.name === 'lastName') {
          setLastName(e.target.value);
          borderColor(e.target, RegExpName);
        } else if (e.target.name === 'email') {
          setEmail(e.target.value);
          borderColor(e.target, RegExpEmail);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
          borderColor(e.target, RegExpPassword);
        } else if (e.target.name === 'updates') {
            setUpdates(!updates);
          }
    };

    const registrationUser = (e) => {
      e.preventDefault();
        if (
          firstName.match(RegExpName) &&
          lastName.match(RegExpName) &&
          email.match(RegExpEmail) &&
          password.match(RegExpPassword)
        ) {
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('updates', updates);
          localStorage.removeItem('rememberMe');
        } else {
          alert('Incorrect data set');
        }
    };
   
    return (
        <div className='blockSign'>
            <div className='imgLogo'>
                <img src={image} alt='logo' />
            </div>
            <p>Sign up</p>
            
            <div>
                <form className='loginApp'>
                    <div className='inputName'>                  
                    <input
                        type='text'
                        name='firstName'
                        onChange={registrationData}
                        value={firstName}
                        placeholder='First Name *'
                        required
                    />
                    <input
                        type='text'
                        name='lastName'
                        onChange={registrationData}
                        value={lastName}
                        placeholder='Last Name *'
                        required
                    />
                    </div>
                    <input
                        type='text'
                        name='email'
                        onChange={registrationData}
                        value={email}
                        placeholder='Email Address*'
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        onChange={registrationData}
                        value={password}
                        placeholder='Password *'
                        required
                    />
                    <label>
                        <input
                            type='checkbox'
                            name='updates'
                            onChange={registrationData}
                            checked={updates}
                        />
                        <span>
                            I want to receive inspiration, marketing promotions and updates
                            via email.
                        </span>
                    </label>
                    <button type='submit' onClick={registrationUser}>
                        SIGN UP
                    </button>
                </form>
                <div className='loginInf'>
                <div></div>
                    <Link to='/SignIn'>Already have an account? Sign in</Link>
                </div>
                </div>
            <div className='copyright'>Copyright © Your Website 2020.</div>
        </div>
        
    );
};

export default SignUp;

