// streams & buffers
// for v v v large data source

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// event listener => .on
readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk);
    writeStream.write('NEW CHUNK\n\n');
    writeStream.write(chunk);
});

// pipe does this in a shorter way
// piping
readStream.pipe(writeStream);