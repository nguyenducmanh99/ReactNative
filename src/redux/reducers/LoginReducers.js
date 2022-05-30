import * as types from '../constants';

const initialState = {
  userInfo: {},
  token: '',
};

export default function reducer(state = initialState, actions) {
  console.log(actions);
  switch (actions.type) {
    case types.User_LOGIN_INFO:
      return {
        ...state,
        userInfo: actions.payload,
      };
    case types.TOKEN_INFO:
      return {
        ...state,
        token: actions.payload,
      };
    default:
      return state;
  }
}
