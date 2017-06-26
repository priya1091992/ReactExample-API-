import axios from 'axios';
export const GET_USER='GET_USER';
export const SET_Error='SET_Error';

function fetchUserData() {
  return axios.get('https://reqres.in/api/users');
}

function success(response) {
  let data = []
  if (response && response.data && response.data.data)
    data = response.data.data
  return {
    type: 'GET_USER',
    response: data
  };
}

function failure(err) {
  return {
    type: 'SET_Error',
     err
  };
}

export function fetchUser() {
  return (dispatch) => {
    return fetchUserData().then(
      response => dispatch(success(response)),
      error => dispatch(failure(error))
    );
  };
}
