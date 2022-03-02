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

const start = () => {
    const args = getArgs(process.argv)
    //console.log(args);
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
    getWeather('Mogilev');
}

start();