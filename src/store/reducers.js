import { combineReducers } from 'redux';
import { citiesReducer } from './clocks/reducers';

export default combineReducers({
  citiesReducer: citiesReducer,
});
