import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => (dispatch) => {
  axios.post('http://localhost:3009/signup', formProps);
};

/*
export const signup =
  ({ email, password }) =>
  (dispatch) => {
    axios.post('http://localhost:3009/signup', {
      email,
      password,
    });
  };
*/