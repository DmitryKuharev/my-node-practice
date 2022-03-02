#!/usr/bin/env node
import { getArgs } from "./helper/args.js";
import { printError, printHelp } from "./services/log.service.js";

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
    }
}

start();