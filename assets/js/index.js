const apiKey = 'd321bd7d3c9449f198852415262303';
const proxy = 'https://thingproxy.freeboard.io/fetch/';

document.addEventListener('DOMContentLoaded', async () => {
  const weather = await fetch(`${proxy}${encodeURIComponent(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Sao Paulo&lang=pt&days=1`)}`)
  const api = await weather.json();
  console.log(api);
  document.querySelector('.cidade').textContent = api.location.region;
  document.querySelector('.imgAtual').src = api.current.condition.icon;
  document.querySelector('.condicaoAtual').textContent = api.current.condition.text;
  document.querySelector('.celsius').textContent = api.current.temp_c + '°';
  document.querySelector('.min').textContent = api.forecast.forecastday[0].day.mintemp_c + '°';
  document.querySelector('.max').textContent = api.forecast.forecastday[0].day.maxtemp_c + '°';
  document.querySelector('.manha').textContent = api.forecast.forecastday[0].hour[9].time.slice(-6);
  document.querySelector('.tempManha').textContent = api.forecast.forecastday[0].hour[9].temp_c + '°';
  document.querySelector('.imgManha').src = api.forecast.forecastday[0].hour[9].condition.icon;
  document.querySelector('.tarde').textContent = api.forecast.forecastday[0].hour[14].time.slice(-6);
  document.querySelector('.tempTarde').textContent = api.forecast.forecastday[0].hour[14].temp_c + '°';
  document.querySelector('.imgTarde').src = api.forecast.forecastday[0].hour[14].condition.icon;
  document.querySelector('.noite').textContent = api.forecast.forecastday[0].hour[20].time.slice(-6);
  document.querySelector('.tempNoite').textContent = api.forecast.forecastday[0].hour[20].temp_c + '°';
  document.querySelector('.imgNoite').src = api.forecast.forecastday[0].hour[20].condition.icon;
});

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('locais')) {
    location.href = 'brasil.html';
  }
});