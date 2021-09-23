import generateCanvas from './generateCanvas';

const generateClocks = (city, timezones, index) => {
  let offset;
  for (let i of timezones) {
    if (i.name === city) {
      offset = i.timezone;
      break;
    }
  }

  let time = new Date();

  let currentTime = {
    hours: '',
    minutes: time.getUTCMinutes(),
    seconds: time.getUTCSeconds(),
  };

  let hours = time.getUTCHours() + Number(offset);

  if (hours < 24) {
    currentTime.hours = hours;
  } else {
    hours -= 24;
    currentTime.hours = hours;
  }

  document.getElementById(city + 'TimeWrapper').style.order = index;

  document.getElementById(city + 'Time').innerHTML = `<canvas id="${
    city + 'TimeCanvas'
  }" width="200" height="200"></canvas>
                        <p>${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}</p>
                       `;
  generateCanvas(currentTime, city + 'TimeCanvas');
};

export default generateClocks;
