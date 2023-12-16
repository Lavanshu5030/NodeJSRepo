//const chalk = require('chalk');
import chalk from 'chalk';
import validator from 'validator';
import chalkAnimation from 'chalk-animation';

const error = chalk.bold.red;
const success = chalk.bold.green;
console.log(chalk.blue('Hello world!'));

console.log(error ("this is error"));
console.log(success("You done it successfully"))

console.log("++++++++++++");
let msg = "";
console.log(validator.isEmpty(msg));

let myemail = "abcgmail.com";// @ is not present so it will return false;
console.log(validator.isEmail(myemail));

var rainbow2 = chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

setTimeout(() => {
    rainbow2.stop(); // Animation stops
}, 1000);


