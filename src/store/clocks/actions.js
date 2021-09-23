export const ADD_A_CITY = 'ADD_A_CITY';
export const REMOVE_A_CITY = 'DELETE_A_CITY';
export const CHANGE_A_CITY = 'CHANGE_A_CITY';

export const addCity = (city) => ({
  type: ADD_A_CITY,
  payload: city,
});

export const removeCity = (city) => ({
  type: REMOVE_A_CITY,
  payload: city,
});

export const changeCity = (oldCity, newCity) => ({
  type: CHANGE_A_CITY,
  oldCity: oldCity,
  newCity: newCity,
});
