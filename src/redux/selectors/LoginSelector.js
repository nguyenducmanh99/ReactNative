import {createSelector} from '@reduxjs/toolkit';

const userLoginInfoSelector = state => {
  console.log(state.LoginReducers);
  state.LoginReducers;
};

// const selectUserInfoSelector = createSelector(
//   userLoginInfoSelector,
//   state => state.userInfo,
// );

const selectTokenSelector = createSelector(
  userLoginInfoSelector,
  state => state.token,
);

// const selectFullNameSelector = createSelector(
//   selectUserInfoSelector,
//   state => state.firstName + ' ' + state.lastName,
// );

const selectRememberMeSelector = createSelector(
  userLoginInfoSelector,
  state => state.isRememberMe,
);

// function
export const selectRememberMe = state => {
  return selectRememberMeSelector(state);
};

export const selectUserInfo = state => {
  // console.log('222', selectUserInfoSelector(state));
  return state.LoginReducers.userInfo;
  // return selectUserInfoSelector(state);
};

export const selectToken = state => {
  return selectTokenSelector(state);
};

// export const selectFullName = state => {
//   return selectFullNameSelector(state);
// };
