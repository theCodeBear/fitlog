'use strict';
import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Link to='register' className='right-tab'>Login</Link>
        <div className='hide'>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='button'>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;