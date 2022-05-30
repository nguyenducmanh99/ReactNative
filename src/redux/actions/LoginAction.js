import * as types from '../constants';

export const setUserLoginInfo = data => {
  console.log('da chay vao day');
  return {
    type: types.User_LOGIN_INFO,
    payload: {
      userName: data.userName,
      password: data.password,
      // "firstName": firstName,
      // "lastName": lastName,
      // "role": role,
      // "status": status,
      // "phone": phone,
      // "address": address,
      // "avatarUrl": avatarUrl,
      // "description":description
    },
  };
};
export function setTokenInfo(token) {
  return {
    type: types.TOKEN_INFO,
    payload: token,
  };
}
