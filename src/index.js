import anime from 'animejs/lib/anime.es';
import { API_KEY as key } from './apikey';

console.log('yessssss');

async function weatherRequest(city) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

weatherRequest('London').then((data) => console.log(data));
