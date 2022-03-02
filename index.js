#!/usr/bin/env node
import { getArgs } from "./helper/args.js";
import { getWeather, getIcon } from "./services/api.service.js";
import { printError, printHelp, printSuccess, printWeather } from "./services/log.service.js";
import { saveKeyValue, getKeyValue, TOKEN } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length){
        printError('Token is empty');
        return;
    };
    try {
        await saveKeyValue(TOKEN.token, token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message);
    }
}

const saveCity = async (city) => {
    if (!city.length){
        printError('City is empty');
        return;
    };
    try {
        await saveKeyValue(TOKEN.city, city);
        printSuccess('City saved');
    } catch (error) {
        printError(error.message);
    }
}

const getForecast = async() => {
    try {
        const city = await getKeyValue(TOKEN.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('Town is wrong');
        }else if (error?.response?.status == 401) {
            printError('Token is wrong');
        }else{
            printError(error.message);
        }
    }
}

const start = () => {
    const args = getArgs(process.argv)
    if (args.h){
        return printHelp();
        // Help block
    }
    if (args.s){
        // Main block
        return saveCity(args.s)
    }
    if (args.t){
        // Secondary block
        return saveToken(args.t)
    }
    return getForecast();
}

start();