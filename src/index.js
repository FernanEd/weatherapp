import anime from 'animejs/lib/anime.es';
import { API_KEY as key } from './apikey';

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

anime({
  targets: mainScreen,
  opacity: [0, 1],
  translateY: [-20, 0],
  duration: 3000,
});

function submitHandler() {
  if (validateInput()) {
    // Dissapear the mainscreen on search
    anime({
      targets: mainScreen,
      opacity: [1, 0],
      duration: 3000,
    });
    anime({
      targets: resultScreen,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 3000,
      begin: () => {
        mainScreen.style.display = 'none';
        resultScreen.style.display = 'block';
      },
    });
  } else {
    anime({
      targets: cityInput,
      translateY: [-10, 0],
    });
  }
}

function validateInput() {
  return cityInput.value !== '';
}

(() => {
  const convertBtn = document.querySelector('#convert-units-btn');
})();
