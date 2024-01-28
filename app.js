//a constant variable in kelvin
const kelvin=299;
//convert kelvin to celsius
const celsius=kelvin-273;
//convert celsius to fahrenheit
//use floor to round off
let fahrenheit=Math.floor( celsius* (9/5)+32);
let newton=Math.floor(celsius* (33/100));
console.log(`The temperature is ${newton} newton`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)


