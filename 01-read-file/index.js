// console.log('из-за слабого железа - работаю на Node.js v13.14.0.');
const fs = require('fs');
const path = require('path');
let file_path = path.join('01-read-file/text.txt');
let stream = fs.createReadStream(file_path, 'utf8');

stream.on('data', function(chunk){
  console.log(chunk);
});
