import axios from 'axios';

const API_KEY = '68664a5218a9df1f0bb13ab7e625b0ca';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCoords = (lat, lon) =>
  axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric', // ✅ no :1
    },
  });

export const getForecastByCity = (city) =>
  axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric', // ✅ no :1
    },
  });
