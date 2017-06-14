var processCSVLine = function(line){
    line=line.replace(/"/g, ''); 
    return line.split(',');
}

module.exports = processCSVLine;