'use strict';
import React from 'react';
import {Link} from 'react-router';

let Logout = (props) => {
  const logout = () => window.localStorage.removeItem('fitlog_user');
  return (
    <Link to='/' onClick={logout} className='logout'>Logout</Link>
  );
};

export default Logout;