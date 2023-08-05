import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => async (dispatch) => {
  const response = await axios.post('http://localhost:3009/signup', formProps);

  dispatch({ type: AUTH_USER, payload: response.data.token });
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
