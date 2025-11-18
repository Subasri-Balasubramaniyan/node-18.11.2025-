const fs = require('fs');
const path = require('path');

const [,, command, name] = process.argv; 

switch (command) {
  case 'ls':
    fs.readdir('.', (err, files) => {
      if (err) console.log(err);
      else console.log("Files:", files);
    });
    break;
  
  case 'mkdir':
    if (!name) console.log('Please provide a folder name');
    else {
      fs.mkdir(name, (err) => {
        if (err) console.log('Could not create folder:', err);
        else console.log(`Folder "${name}" created successfully`);
      });
    }
    break;

  case 'touch':
    if (!name) console.log('Please provide a file name');
    else {
      fs.writeFile(name, '', (err) => {
        if (err) console.log('Could not create file:', err);
        else console.log(`File "${name}" created successfully`);
      });
    }
    break;

  case 'read':
    if (!name) console.log('Please provide a file to read');
    else {
      fs.readFile(name, 'utf8', (err, data) => {
        if (err) console.log('Could not read file:', err);
        else console.log(`Content of "${name}":`, data);
      });
    }
    break;

  case 'rm':
    if (!name) console.log('Please provide a file/folder to delete');
    else {
      fs.rm(name, { recursive: true, force: true }, (err) => {
        if (err) console.log('Could not delete:', err);
        else console.log(`"${name}" removed successfully`);
      });
    }
    break;

  default:
    console.log(`
Usage:
  node file-manager.js ls           -> List files
  node file-manager.js mkdir test   -> Create 'test' folder
  node file-manager.js touch a.txt  -> Create file 'a.txt'
  node file-manager.js read a.txt   -> Read file 'a.txt'
  node file-manager.js rm a.txt     -> Delete 'a.txt'
`);
}
