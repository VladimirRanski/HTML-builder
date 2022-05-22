// console.log('из-за слабого железа - работаю на Node.js v13.14.0.');
const fs = require('fs');
const path = require('path');
const process = require('process');
const {stdin: input, stdout: output} = require('process');
const readline = require('readline');

let file_path = path.join('02-write-file/text.txt');

const TEXT_START = 'Введите текст...';
const TEXT_FINISH = 'Ввод текста окончен, спасибо за работу!';

fs.writeFile(file_path,'', function (err){
  if (err) throw new Error(err);
});

console.log(TEXT_START);

const textIn = readline.createInterface({ input, output });

textIn.on('SIGINT', () => {
  console.log(TEXT_FINISH);
  process.exit();
});

textIn.on('line', (input) => {
  if (input !== 'exit') {
    fs.appendFile(file_path, input + '\n', function (err){
      if (err) throw new Error(err);
    });
  } else {
    console.log(TEXT_FINISH);
    process.exit();
  }
});