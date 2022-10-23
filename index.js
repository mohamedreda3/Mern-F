const fs = require("fs");
fs.readdir("./", (err, files) => {
  fs.readFileSync("./index.js", 'utf-8' ,(err, file) => {
    console.log(file);
  });
});

console.log('hh')