const path = require("path");

// get path separator
console.log(path.sep);

// connect the full path
let _path = path.join('./content', 'subfolder', 'text.txt')
console.log(_path)

// get just the base
let base = path.basename(_path)
console.log(base)
 
const absolute = path.resolve(__dirname, _path)
console.log(absolute)