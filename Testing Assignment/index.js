var fs = require('fs');
var logger = require('./loggerConfig.js');
var fileReadLine = require('./fileReadLine.js');
fs.access('G20.csv', fs.constants.F_OK || fs.constants.R_OK, (err) => {
    if(err){
        logger.error('File not accessible or does not exist');
    }
    else{
        fileReadLine.fileReadLine('G20.csv')
    }

});