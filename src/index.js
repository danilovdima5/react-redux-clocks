import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, timezones } from './App';
import store from './store/clocks/reducers';
import generateClocks from './functions/generateClocks';

ReactDOM.render(<App />, document.getElementById('root'));

setInterval(() => {
  store.forEach((city, index) => {
    generateClocks(city, timezones, index);
  });
}, 0);
