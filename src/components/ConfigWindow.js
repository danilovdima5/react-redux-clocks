import CityToActivate from './CityToActivate';
import addSelector from '../functions/addSelector';

const ConfigWindow = (props) => {
  document.addEventListener('DOMContentLoaded', () => {
    let usersCity = new Date().toString().split('(').pop().split(' ').shift();
    props.addCity(usersCity);

    let timeWrapper = document.createElement('div');
    let time = document.createElement('div');
    timeWrapper.id = usersCity + 'TimeWrapper';
    time.id = usersCity + 'Time';
    timeWrapper.append(time);
    document.getElementById('clocksHere').append(timeWrapper);

    addSelector(usersCity, props.timezones, usersCity + 'TimeWrapper', props.changeCity);

    document.getElementById(usersCity).classList.add('active');
    document.getElementById(usersCity).classList.remove('notActive');
  });

  return (
    <div id="configureWindow">
      <section id="addCitySection">TODO: adding a city</section>
      <div id="verticalLine"></div>
      <section id="listOfCities">
        <header>
          <h1>Cities</h1>
          <div id="closeConfigureWindowWrapper">
            <img
              src="./images/exit.png"
              id="closeConfigureWindow"
              alt=""
              onClick={props.hideConfigureWindow}
            />
          </div>
        </header>
        <section id="availableCities">
          {props.timezones.map((timezone, index) => (
            <CityToActivate
              key={`${timezone.name}_${index}`}
              name={timezone.name}
              onClick={(event) => {
                let classList = event.target.className.split(' ');
                if (classList[1] === 'notActive') {
                  props.addCity(event.target.innerHTML);

                  let timeWrapper = document.createElement('div');
                  let time = document.createElement('div');
                  timeWrapper.id = event.target.innerHTML + 'TimeWrapper';
                  time.id = event.target.innerHTML + 'Time';
                  timeWrapper.append(time);
                  document.getElementById('clocksHere').append(timeWrapper);
                  addSelector(
                    event.target.innerHTML,
                    props.timezones,
                    event.target.innerHTML + 'TimeWrapper',
                    props.changeCity,
                  );
                  document.getElementById(event.target.innerHTML).classList.remove('notActive');
                  document.getElementById(event.target.innerHTML).classList.add('active');
                } else {
                  props.removeCity(event.target.innerHTML);
                  document.getElementById(event.target.innerHTML + 'TimeWrapper').remove();
                  document.getElementById(event.target.innerHTML).classList.remove('active');
                  document.getElementById(event.target.innerHTML).classList.add('notActive');
                }
              }}>
              {timezone.name}
            </CityToActivate>
          ))}
        </section>
      </section>
    </div>
  );
};

export default ConfigWindow;
