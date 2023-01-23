import axios from "axios";

export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: {},
  };
};

export const addItem = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

export const addProducts = (products) => {
  return {
    type: "ADD-PRODUCTS",
    payload: products,
  };
};

export const setProducts = (products) => {
  return {
    type: "SET-PRODUCTS",
    payload: products,
  };
};

export const setCategories = (products) => {
  return {
    type: "SET-CATEGORIES",
    payload: products,
  };
};

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/products"
  );
  console.log(response.data.results);
  dispatch(setProducts(response.data.results));
};

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  console.log(response.data.results);
  dispatch(setCategories(response.data.results));
};
