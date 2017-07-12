var fs = require('fs');
var path = require('path');

copyTemplate('default' , 'default')



function copyTemplate (from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str) {
  fs.writeFileSync(path.join(process.cwd(), path), str)
}
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}
