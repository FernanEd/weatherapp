import anime from 'animejs/lib/anime.es';

import { weatherRequest, fillResult, filterData } from './data-handling';

console.log('yessssss');

let userCity = localStorage.getItem('user_city') || undefined;

/*
if(userCity){
    weatherRequest
}
*/

let mainScreen = document.querySelector('#main-screen');
let resultScreen = document.querySelector('#result-screen');
let cityInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', submitHandler);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitHandler();
});

window.addEventListener('load', (e) => {
  //Animate main screen
  anime({
    targets: mainScreen,
    opacity: [0, 1],
    translateY: [-10, 0],
    duration: 3000,
  });
});

async function submitHandler() {
  if (validateInput()) {
    let mainScreenAnimation = await anime({
      targets: mainScreen,
      opacity: [1, 0],
      duration: 3000,
    });

    let fetchWeatherData = await weatherRequest(cityInput.value).then((data) =>
      fillResult(filterData(data))
    );

    let resultScreenAnimation = anime({
      targets: resultScreen,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 3000,
      begin: () => {
        mainScreen.style.display = 'none';
        resultScreen.style.display = 'block';
      },
    });
  } else {
    let inputAnimation = await anime({
      targets: cityInput,
      translateX: [-20, 0],
    });
  }
}

function validateInput() {
  return cityInput.value !== '';
}

(() => {
  const convertBtn = document.querySelector('#convert-units-btn');
})();
