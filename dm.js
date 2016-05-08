fs = require('fs');
var pathExt = [
["../Pictures/",".png",".jpg",".gif",".jpeg"]
["../Documents/",".doc",".txt",".pdf",".xls",".docx",".ppt"]
["../Development/",".js",".java"]
["../Music/",".mp3",".wav"]
["../Videos/",".mp4",".mov"]
];
var child = require("child_process");
var name;
child.exec("whoami", function (error, stdout, stderr) {
  //stdout and stderr are available here
name = stdout;
name = name.replace(/\r?\n|\r/g, "");

fs.readdir("/home/"+name+"/Downloads", function (err, files) {
  console.log(files);
});
});


