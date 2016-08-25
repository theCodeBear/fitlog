'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';


let Navigator = (props) => (
  <div>
    <Link to='/'>HOME</Link>
    <br />
    <Link to='/page2'>Page 2</Link>
  </div>
);

export default Navigator;
