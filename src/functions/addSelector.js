import createNewSelector from './createNewSelector';
import store from '../store/clocks/reducers';

const addSelector = async (city, timezones, where, changeCity) => {
  let place = document.getElementById(where);
  let select = document.createElement('select');
  select.id = where + 'Select';
  place.append(select);

  for (let i of timezones) {
    let option = document.createElement('option');
    option.innerHTML = i.name;
    option.value = i.name;

    if (i.name === city) {
      option.selected = 'selected';
    }

    if (store.includes(i.name)) {
      option.disabled = 'disabled';
    }

    select.append(option);
  }

  for (let i of document.querySelectorAll(`[value="${city}"]`)) {
    i.setAttribute('disabled', 'disabled');
  }

  const thisSelector = document.getElementById(select.id);
  thisSelector.addEventListener('change', () => {
    const newCity = select.value;
    changeCity(city, newCity);

    const order = document.getElementById(city + 'TimeWrapper').style.order;

    document.getElementById(city + 'TimeWrapper').remove();

    let timeWrapper = document.createElement('div');
    timeWrapper.style.order = order;
    let time = document.createElement('div');
    timeWrapper.id = newCity + 'TimeWrapper';
    time.id = newCity + 'Time';
    timeWrapper.append(time);
    document.getElementById('clocksHere').append(timeWrapper);

    document.getElementById(newCity).classList.add('active');
    document.getElementById(city).classList.remove('active');
    document.getElementById(city).classList.add('notActive');
    document.getElementById(newCity).classList.remove('notActive');

    for (let i of document.querySelectorAll(`[value="${city}"]`)) {
      i.removeAttribute('disabled');
    }

    for (let i of document.querySelectorAll(`[value="${newCity}"]`)) {
      i.setAttribute('disabled', 'disabled');
    }

    createNewSelector(newCity, timezones, newCity + 'TimeWrapper', changeCity);
  });
};

export default addSelector;
