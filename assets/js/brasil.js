const apiKey = 'd321bd7d3c9449f198852415262303';
document.addEventListener('DOMContentLoaded', async () => {
  const weatherSP = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Sao Paulo&lang=pt`);
  const apiSP = await weatherSP.json();
  document.querySelector('.imgSP').src = apiSP.current.condition.icon;
  document.querySelector('.cidadeSP').textContent = apiSP.location.region;
  document.querySelector('.celsiusSP').textContent = apiSP.current.temp_c + '°';
  document.querySelector('.condicaoSP').textContent = apiSP.current.condition.text;

  const weatherRJ = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Rio de Janeiro&lang=pt`);
  const apiRJ = await weatherRJ.json();
  document.querySelector('.imgRJ').src = apiRJ.current.condition.icon;
  document.querySelector('.cidadeRJ').textContent = apiRJ.location.region;
  document.querySelector('.celsiusRJ').textContent = apiRJ.current.temp_c + '°';
  document.querySelector('.condicaoRJ').textContent = apiRJ.current.condition.text;

  const weatherMG = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Minas Gerais&lang=pt`);
  const apiMG = await weatherMG.json();
  document.querySelector('.imgMG').src = apiMG.current.condition.icon;
  document.querySelector('.cidadeMG').textContent = apiMG.location.region;
  document.querySelector('.celsiusMG').textContent = apiMG.current.temp_c + '°';
  document.querySelector('.condicaoMG').textContent = apiMG.current.condition.text;
});

const botao = document.querySelector('.voltar');
botao.addEventListener('click', () => {
  location.href = 'index.html';
});