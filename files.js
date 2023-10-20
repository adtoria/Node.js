// working with files in js can't be done without node
// fs module
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    // this callback function will fire when reading of the file is complete
    // asynchronous - doesn't block our code
    // even though it's taking some time
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
    // a buffer is a package of data sent to us
});

console.log('last line');

// write files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
});

// creates the file for us if it didn't exist
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}