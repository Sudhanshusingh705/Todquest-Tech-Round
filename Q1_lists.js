// Q1: Read the local directory and list all file names in it using js.

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'Data');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } else {
    console.log(files);
    files.forEach(function (file) {
        let filepath = path.join(directoryPath,'Data');
        fs.readFile(filepath, { encoding: 'utf-8' },
        function (err, data) {
          if (err) {
            //console.log(err)
          }
          else {
            console.log(file);
          }
        })

    });

  }

});

