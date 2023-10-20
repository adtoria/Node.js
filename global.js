// global object

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);
// we don't have to explicitly type global.setTimeout

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname); // gets the absolute path of the folder
console.log(__filename); // gets the absolute path of the folder with the filename

// not applicable
// because document is defined in the window object
// we don't have that in the global namespace of nodejs
// console.log(document.querySelector);

