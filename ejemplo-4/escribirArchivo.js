const fs = require('fs');

const guardar = (filename, data) => {
  fs.writeFile(filename + '.txt', data, (err) => {
    if (err) console.log(err);
    console.log(`El archivo ${filename} ha sido creado`);
  });
}

module.exports = guardar;