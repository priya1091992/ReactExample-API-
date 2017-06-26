import * as types from '../actions/user.action'

const initialState = {
    user: [],
    err: null
};

export default function UserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_USER: {
      let responseData = action.response;
      return Object.assign({}, state, {
         user: responseData
      });
    }
    case types.SET_Error: {
      let responseData = action.err;
      return Object.assign({}, state, {
        err: responseData
      });
    }
    default:
      return state;
  }
}


