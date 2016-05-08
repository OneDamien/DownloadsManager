fs = require('fs');

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("whoami",puts);

fs.readdir("/home/"+ +"/Downloads", function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});
