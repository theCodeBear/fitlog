import Observable from './observable';

let user = new Observable(
  {
    name: '',
    email: '',
    password: ''
  }
);

export {user};