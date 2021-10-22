import * as actionTypes from "./actionTypes";

const initialState = {
  joke: "click to generte a joke",
  loading:false
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.GENERATE_JOKE) {
    return {
      ...state,
      joke: action.payload,
      loading: false
    };
  }
  if (action.type === actionTypes.SET_LOADING) {
    return {
      ...state,
      loading: action.payload
    };
  }
  return state;
};

export default reducer;
