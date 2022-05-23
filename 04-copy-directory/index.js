// console.log('из-за слабого железа - работаю на Node.js v13.14.0.');
console.log('*******************************************************************************************');
const fs = require('fs');
const path = require('path');
// const fsPromises = require('fs/promises')
// const {copyFile} = require('fs');

const path_folder = path.join(__dirname, 'files');
const path_folder_new = path.join(__dirname, 'files-copy');
let folder_out = path_folder;
let folder_in = path_folder_new;
let folder_teil = '';
console.log(path_folder);
console.log(path_folder_new);



function myCopy (folder_out){

  fs.mkdir(folder_in, {recursive: true},  function (err){
    if (err) throw console.log('не создал папку: ', err);
    console.log('папка создана');
  });

  fs.readdir(folder_out, {withFileTypes: true}, function (err,files) {
    if (err) throw console.log('не прочитал папку: ', err);
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      if (files[i].isFile()) {
        console.log(files[i]);
        folder_teil = '\\' + files[i].name;
        let start = folder_out + folder_teil;
        let finish = folder_in + folder_teil;
        fs.copyFile(start, finish, function (err) {
          if (err) throw console.log('не скопировал файл: ', err);

          console.log('start - ', start);
          console.log('finish - ', finish);

          console.log('скопирован', files[i]);

        });
      } else {
        continue;
      }
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].isDirectory()){
        folder_out += folder_teil;
        folder_in += folder_teil;
        console.log('новый путь - ', folder_in);
        fs.mkdir(folder_in, {recursive: true},  function (err){
          if (err) throw console.log('не создал папку: ', err);
          console.log('папка создана', folder_in);
        });
        myCopy(folder_out);
      }
    }
  });
}

myCopy (path_folder);

