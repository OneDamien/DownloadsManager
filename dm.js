fs = require('fs');

fs.readdir("/home"+ +"/Downloads", function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});
