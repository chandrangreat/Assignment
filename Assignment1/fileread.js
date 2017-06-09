var fs = require('fs');

var content;

fs.readFile('G20.csv','utf8' ,function(error, data){
    //console.log(data.toString()); //Gives the correct contents of the file.
    console.log(data);// Gives some different value if utf8 is not included as parameter in readFile Method
});