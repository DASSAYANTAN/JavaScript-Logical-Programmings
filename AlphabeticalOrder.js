//!convert letter of a given string in alphabetical order

function a(str) {
    return str.split("").sort().join("");
}

console.log(a(prompt("enter your name:")));
