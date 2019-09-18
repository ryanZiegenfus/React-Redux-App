import {
    FETCHING_IMAGE_START,
    FETCHING_IMAGE_SUCCESS,
    FETCHING_IMAGE_FAILURE
  } from "../actions";
  
  const initialState = {
    image: null,
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_IMAGE_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_IMAGE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          image: action.payload
        };
      default:
        return state;
    }
  };