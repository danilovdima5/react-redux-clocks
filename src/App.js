import React from 'react';
import * as timezonesEntry from './timezones.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './store/reducers';

import ConfigButton from './components/ConfigButton';
import ConfigWindowContainer from './components/ConfigWindowContainer';

import CyrillicToTranslit from 'cyrillic-to-translit-js';
const cyrillicToTranslit = new CyrillicToTranslit();

export let timezones = [];

for (let i in timezonesEntry.default) {
  let k = timezonesEntry.default[i];
  if (typeof k == 'object') {
    k.name = cyrillicToTranslit.transform(k.name);
    timezones.push(k);
  }
}

const store = createStore(combineReducers);

export const App = () => {
  const [visibleConfigureWindow, showConfigureWindow] = React.useState('none');
  return (
    <Provider store={store}>
      <div id="appWrapper">
        <div id="configureWindowWrapper" style={{ display: visibleConfigureWindow }}>
          <ConfigWindowContainer
            timezones={timezones}
            hideConfigureWindow={() => {
              showConfigureWindow('none');
            }}
          />
        </div>
        <ConfigButton
          onClick={() => {
            showConfigureWindow('flex');
          }}
        />
        <section id="clocksHere"></section>
      </div>
    </Provider>
  );
};
