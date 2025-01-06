"use strict"

let result = "";
const length = 6;

for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
        result += "*"
    }
    result += "\n";
}

console.log(result);