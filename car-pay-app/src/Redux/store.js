import { sliderReducer } from './reducers';
import { legacy_createStore as createStore} from 'redux'

export const initialState = {
  carPrice: 0,
  prePay:0,
  monthsToReturn:12
  };

export const store = createStore(
    sliderReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;