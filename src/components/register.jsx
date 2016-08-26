'use strict';
import React from 'react';
import { user } from '../models/data';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.saveInfo = this.saveInfo.bind(this);
  }
  saveInfo(e) {
    e.preventDefault();
    let refs = this.refs;
    user.set({
      name: refs.name.value,
      email: refs.email.value,
      password: refs.pword.value
    });
    refs.name.value = refs.email.value = refs.pword.value = refs.cpword.value = '';
    window.localStorage.setItem('fitlog_user', JSON.stringify(user.get()));
    window.location.hash = 'home';
  }
  render() {
    return (
      <form onSubmit={this.saveInfo} className='signup-form'>
        <input type='text' ref='name' placeholder='Name' /><br/>
        <input type='email' ref='email' placeholder='Email' /><br/>
        <input type='password' ref='pword' placeholder='Password' /><br/>
        <input type='password' ref='cpword' placeholder='Confirm Password' /><br/>
        <button type='submit'>Register</button>
      </form>
    );
  }
}

export default Register;