var processCSVLine = require('./processCSVLine');

var filterCSVHeader = function(line){
    // line=line.replace(/"/g, ''); 
    // var csvheader = line.split(',');
    var csvheader = processCSVLine(line);
    return csvheader;
};

module.exports = filterCSVHeader;
