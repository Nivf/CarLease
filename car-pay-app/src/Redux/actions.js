import { ActionTypes } from "./constants/action-types";

export const setCarPriceValue = (value) => ({
    type: ActionTypes.SET_CAR_PRICE,
    payload: value,
  });

  export const setPrePriceValue = (value) => ({
    type: ActionTypes.SET_CAR_PRE_PAY,
    payload: value,
  });

  export const setMonthValue = (value) => ({
    type: ActionTypes.SET_MONTH,
    payload: value,
  });