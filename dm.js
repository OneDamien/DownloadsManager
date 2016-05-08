fs = require('fs');

var child = require("child_process");
var name;
child.exec("whoami", function (error, stdout, stderr) {

  //stdout and stderr are available here
  name = stdout;
name = name.replace(/\r?\n|\r/g, "");

fs.readdir("/home/"+name+"/Downloads", function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});
});


