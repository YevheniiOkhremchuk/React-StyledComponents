import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome,{localStorage.getItem('firstName')}</h1>
      <Link to='/SignIn'>
        <button>Exit</button>
      </Link>
    </div>
  );
}

export default Welcome;