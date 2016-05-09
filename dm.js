fs = require('fs');

var child = require("child_process");
var name;
child.exec("whoami", function (error, stdout, stderr) {
  //stdout and stderr are available here
name = stdout;
name = name.replace(/\r?\n|\r/g, "");
var homePath = "/home/"+name;
var downloadsFolder = homePath + "/Downloads/";
var pathExt = [
    [homePath+"/Pictures/",".png",".jpg",".gif",".jpeg"],
    [homePath+"/Documents/",".doc",".txt",".pdf",".xls",".docx",".ppt"],
    [homePath+"/Development/",".js",".java",".deb",".exe",".gz"],
    [homePath+"/Music/",".mp3",".wav"],
    [homePath+"/Videos/",".mp4",".mov"]
];
fs.readdir(downloadsFolder, function (err, files) {
  //console.log(files);
  files.forEach(function(item) {
      for(var i = 0; i<pathExt.length; i++){
          for(var j = 1; j<pathExt[i].length; j++) {
              if (item.toString().endsWith(pathExt[i][j])) {
              //console.log(item);
              fs.rename(downloadsFolder+item, pathExt[i][0]+item, function (err) {
                  if(err)
                    console.log(err);
              });
                  console.log("Moved " + downloadsFolder+item + " to "
                      + pathExt[i][0]+item);

          }
              //move.file.to.pathExt[i][0];
          }
      }

  });

});
});


