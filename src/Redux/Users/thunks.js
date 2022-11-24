import {
  addProductSuccess,
  addProductLoading,
  addProductError,
  editProductSuccess,
  editProductLoading,
  editProductError,
  deleteProductSuccess,
  deleteProductLoading,
  deleteProductError,
  getProductSuccess,
  getProductLoading,
  getProductError,
} from "./actions";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/products`,
        {
          method: "GET",
          headers: new Headers({ "Content-type": "application/json" }),
          mode: "no-cors",
        }
      );
      const json = await response.json();
      dispatch(getProductSuccess(json.data));
      console.log(json);
    } catch (error) {
      dispatch(getProductError(error.toString()));
    }
  };
};

export const deleteProducts = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const json = await response.json();
      dispatch(deleteProductSuccess(json.data));
    } catch (error) {
      dispatch(deleteProductError(error.toString()));
    }
  };
};

export const postProducts = (name, description, price, stock) => {
  return async (dispatch) => {
    dispatch(addProductLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product/add`,
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
        dispatch(addProductSuccess(json.data));
        console.log("Product added");
      } else {
        //dispatch(postProductsError(error.toString()));
        console.log("Product could not be Added.");
      }
    } catch (error) {
      dispatch(addProductError(error.toString()));
      console.log("Product could not be Added.");
    }
  };
};

export const editProducts = (id, name, description, price, stock) => {
  return async (dispatch) => {
    dispatch(editProductLoading());
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product/update/${id}`,
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
        dispatch(editProductSuccess(json.data));
        console.log("Product Added.");
      } else {
        //dispatch(postProductsError(error.toString()));
        console.log("Product could not be Added.");
      }
    } catch (error) {
      dispatch(editProductError(error.toString()));
      console.log("Product could not be Added.");
    }
  };
};
