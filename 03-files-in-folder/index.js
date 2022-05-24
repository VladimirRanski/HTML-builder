// console.log('из-за слабого железа - работаю на Node.js v13.14.0.');
const fs = require('fs');
const path = require('path');
const {stat} = require('fs');

let dir_path = path.join('03-files-in-folder/secret-folder');

fs.readdir(dir_path, {withFileTypes: true}, function (err,files){
  if (err) throw new Error(err);
  for (let i = 0; i < files.length; i++) {
    if (!files[i].isFile()) {
      continue;
    }
    let result = '';
    let nameFile = '';
    let typeFile = '';
    let sizeFile = 0;
    typeFile = path.extname(files[i].name).slice(1);
    nameFile = (files[i].name).slice(0, (files[i].name).lastIndexOf('.'));
    let dir_path_full = dir_path + '\\' + files[i].name;
    fs.stat(dir_path_full, function (err, stats) {
      sizeFile = stats['size'] / 1024;
      result = nameFile + ' - ' + typeFile + ' - ' + sizeFile + 'kb';
      console.log(result);
    });
  }
});
