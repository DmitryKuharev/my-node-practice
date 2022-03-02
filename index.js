#!/usr/bin/env node
import { getArgs } from "./helper/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN } from "./services/storage.service.js";

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

const getForecast = async() => {
    try {
        const weather = await getWeather('Mogilev');
        console.log(weather);
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
        printHelp();
        // Help block
    }
    if (args.s){
        // Main block
    }
    if (args.t){
        // Secondary block
        return saveToken(args.t)
    }
    getForecast();
}

start();