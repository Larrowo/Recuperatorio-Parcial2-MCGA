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

const INITIAL_STATE_VALUE = {
  users: [],
  isLoading: false,
  error: false,
  message: "",
  user: undefined,
};

const usersReducer = (state = INITIAL_STATE_VALUE, action) => {
  switch (action.type) {
    case ADD_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "Loading...",
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.payload,
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "LOADING USERS",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        USERs: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case EDIT_USER_LOADING:
      return {
        ...state,
        isLoading: false,
        message: "Loading...",
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.payload,
      };
    case EDIT_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    case DELETE_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        USERs: [...state.list.filter((USER) => USER._id !== action.payload)],
        message: "Project deleted Successfully",
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
