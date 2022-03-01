#!/usr/bin/env node
import { getArgs } from "./helper/args.js";

const start = () => {
    const args = getArgs(process.argv)
    //console.log(args);
    if (args.h){
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