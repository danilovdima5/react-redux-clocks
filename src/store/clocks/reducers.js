import { ADD_A_CITY, REMOVE_A_CITY, CHANGE_A_CITY } from './actions';

const store = [];

export const citiesReducer = (state = store, action) => {
  switch (action.type) {
    case ADD_A_CITY:
      state.push(action.payload);
      return state;
    case REMOVE_A_CITY:
      state.splice(state.indexOf(action.payload), 1);
      return state;
    case CHANGE_A_CITY:
      state.splice(state.indexOf(action.oldCity), 1, action.newCity);
      return state;
  }
  return state;
};

export default store;
