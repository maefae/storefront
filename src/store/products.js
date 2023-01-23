const initialState = [];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET-PRODUCTS":
      return payload;
    default:
      return state;
  }
};

export default productsReducer;
