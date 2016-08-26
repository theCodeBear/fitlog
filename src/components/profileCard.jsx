'use strict';
import React from 'react';


let ProfileCard = ({user}) => (
  <div className='card-container'>
    <div className='profile-card'>
      {user.name}<br/>
      {user.email}<br/>
      {user.password}<br/>
    </div>
  </div>
);

export default ProfileCard;