// import people file into modules file
const { people, ages } = require('./people'); // look in the same directory

// when we require a file in another file
// node looks for that file automatically
// and runs that file

// this returns an empty object =>
console.log(people, ages);

// importing a file doesn't give us access to things in that file
// console.log(people);

// for that we have to export something manually

const os = require('os');
console.log(os.platform(), os.homedir());