import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import image from '../../image/padlock.png';
import '../signComponentsStyle.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [rememberMe, setRememberMe] = useState(
      Boolean(localStorage.getItem('rememberMe'))
    );

    const userInformation = (e) => {
        if (e.target.name === 'email') {
          setEmail(e.target.value);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
        } else if (e.target.name === 'rememberMe') {
          setRememberMe(!rememberMe);
        }
    };

    useEffect(() => {
        if (
          localStorage.getItem('rememberMe') !== null &&
          localStorage.getItem('rememberMe') === 'true'
        ) {
          setEmail(localStorage.getItem('email'));
          setPassword(localStorage.getItem('password'));
        }
       },[]);

    const userVerification = () => {
        if (
          email === localStorage.getItem('email') &&
          password === localStorage.getItem('password')
        ) {
          localStorage.setItem('rememberMe', rememberMe);
          setIsLogin(true);
        } else {
          alert('Invalid user email or password');
        }
    };

    return (
        <div className='blockSign'>
            <div>{isLogin ? <Redirect to='/Welcome' /> : null}</div>
            <div className='imgLogo'>
                <img src={image} alt='logo' />
            </div>
            <p>Sign in</p>
            <div>
                <form className='loginApp'>
                    <input
                        type='text'
                        name='email'
                        onChange={userInformation}
                        value={email}
                        placeholder='Email Address *'
                    />
                    <input 
                        type='password'
                        name='password'
                        onChange={userInformation}
                        value={password}
                        placeholder='Password *'
                    />
                    <label>
                        <input
                            type='checkbox'
                            name='rememberMe'
                            onChange={userInformation}
                            checked={rememberMe}
                        />
                        <span>Remember me</span>
                    </label>
                    <button type='submit' onClick={userVerification}>
                        SIGN IN
                    </button>
                </form>
            <div className='loginInf'>
                <div>Forgot password?</div>
                <Link to='/SignUp'>Don`t have an account? Sign Up</Link>
            </div>
            </div>
            <div className='copyright'>Copyright © Your Website 2020.</div>
        </div>
    );
};

export default SignIn;

