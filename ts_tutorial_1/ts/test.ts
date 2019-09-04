let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

if (typeof decimal === typeof binary) {
    console.log("number");
}

let blue: string = "blue";
let red: string = 'red';

let fullName: string = `Murotani Toshiki`;
let age: number = 22;
let sentence: string = `Hi, I'm ${ fullName }.\nI'll be ${ age + 1 } years old within half a year.`;

console.log(sentence);