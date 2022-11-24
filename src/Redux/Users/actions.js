import {
  ADD_USER_SUCCESS,
  ADD_USER_LOADING,
  ADD_USER_ERROR,
  GET_USERS_SUCCESS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  EDIT_USER_SUCCESS,
  EDIT_USER_LOADING,
  EDIT_USER_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_LOADING,
  DELETE_USER_ERROR,
} from "./types";

export const addUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

export const addUserLoading = () => {
  return {
    type: ADD_USER_LOADING,
  };
};

export const addUserError = (error) => {
  return {
    type: ADD_USER_ERROR,
    payload: error,
  };
};

export const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload: data,
  };
};
export const editUserLoading = () => {
  return {
    type: EDIT_USER_LOADING,
  };
};
export const editUserError = (error) => {
  return {
    type: EDIT_USER_ERROR,
    payload: error,
  };
};
export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};
export const deleteUserLoading = () => {
  return {
    type: DELETE_USER_LOADING,
  };
};
export const deleteUserError = (error) => {
  return {
    type: DELETE_USER_ERROR,
    payload: error,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};

export const getUserLoading = (data) => {
  return {
    type: GET_USERS_LOADING,
  };
};

export const getUserError = (error) => {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
};
