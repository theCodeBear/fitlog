'use strict';
import React from 'react';
import {render} from 'react-dom';
import ProfileCard from './profileCard.jsx';
import Logout from './logout.jsx';
import { user as u } from '../models/data';

let Home = (props) => {
  console.log('dtata in home', u.get());
  let user = JSON.parse(window.localStorage.getItem('fitlog_user'));
  return (
    <div>
      <Logout />
      <ProfileCard user={user}/>
    </div>
  );
};

export default Home;
