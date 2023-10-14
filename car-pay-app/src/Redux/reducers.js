import { ActionTypes } from "../Redux/constants/action-types"
import { initialState } from "./store";

  
  export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.SET_CAR_PRICE :{
        
        return { ...state, carPrice: action.payload };
      }
      case ActionTypes.SET_CAR_PRE_PAY :{
        return { ...state, prePay: action.payload };
      }
      case ActionTypes.SET_MONTH :{
        return { ...state, monthsToReturn: action.payload };
      }
      default:
        return state;
    }
  };