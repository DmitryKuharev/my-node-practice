import axios from 'axios';
import { getKeyValue, TOKEN } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN.token);
    if(!token) {
        throw new Error('Token is null, fix it with "-t [API_KEY]"');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;
};

export {getWeather};