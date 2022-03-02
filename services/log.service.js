import chalk from 'chalk'; // To display colored text.
import dedent from 'dedent-js'; // To remove spaces in the console.

const printError = (error) => {
    console.log( chalk.bgRed('Error:')+ ' ' + error);
}
const printSuccess = (msg) => {
    console.log( chalk.bgGreen('Success:')+ ' ' + msg);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgBlue('Help')}
        -h Help;
        -s Main block;
        -t Secondary block;
        `
    );
}

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlue('Weather')}
        City: ${res.name}, ${icon} ${res.weather[0].description}
        Temp: ${res.main.temp}, feel like: ${res.main.feels_like}
        Humidity: ${res.main.humidity} Wind: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather }