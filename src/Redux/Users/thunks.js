import {
  addUserSuccess,
  addUserLoading,
  addUserError,
  editUserSuccess,
  editUserLoading,
  editUserError,
  deleteUserSuccess,
  deleteUserLoading,
  deleteUserError,
  getUserSuccess,
  getUserLoading,
  getUserError,
} from "./actions";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUserLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/Users`,
        {
          method: "GET",
          headers: new Headers({ "Content-type": "application/json" }),
          mode: "no-cors",
        }
      );
      const json = await response.json();
      dispatch(getUserSuccess(json.data));
      console.log(json);
    } catch (error) {
      dispatch(getUserError(error.toString()));
    }
  };
};

export const deleteUsers = (id) => {
  return async (dispatch) => {
    dispatch(deleteUserLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/User/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const json = await response.json();
      dispatch(deleteUserSuccess(json.data));
    } catch (error) {
      dispatch(deleteUserError(error.toString()));
    }
  };
};

export const postUsers = (name, description, price, stock) => {
  return async (dispatch) => {
    dispatch(addUserLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/User/add`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock,
          }),
        }
      );
      const json = await response.json();
      if (response.status === 201) {
        dispatch(addUserSuccess(json.data));
        console.log("User added");
      } else {
        //dispatch(postUsersError(error.toString()));
        console.log("User could not be Added.");
      }
    } catch (error) {
      dispatch(addUserError(error.toString()));
      console.log("User could not be Added.");
    }
  };
};

export const editUsers = (id, name, description, price, stock) => {
  return async (dispatch) => {
    dispatch(editUserLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/User/update/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock,
          }),
        }
      );
      const json = await response.json();
      if (response.status === 202) {
        dispatch(editUserSuccess(json.data));
        console.log("User Added.");
      } else {
        //dispatch(postUsersError(error.toString()));
        console.log("User could not be Added.");
      }
    } catch (error) {
      dispatch(editUserError(error.toString()));
      console.log("User could not be Added.");
    }
  };
};
