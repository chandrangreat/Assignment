var fs = require('fs');
var sinon = require('sinon');
const readline = require('readline');

var setCreateInterfaceSpy = sinon.spy(readline,'createInterface');

var logger = require('./loggerConfig.js');

var filterCSVHeader = require('./filterCSVHeader.js');
var filterCSVContent = require('./filterCSVContent.js');
var convertToJSON = require('./convertToJSON');

var dataArray=[];
var count = 0;

var fileReadLine = function(fileName){
        
        readStream = fs.createReadStream(fileName);
        var rl = readline.createInterface({ input:readStream});

        rl.on('line', function(line) {

            this.emit("pause", line);
            
        });

       


        rl.on('pause', function(line) {
            count++;

            if(count==1){
                csvHeader = filterCSVHeader(line);
                //console.log(csvHeader);
                //console.log(count);
                this.emit("resume");
            }
            else{
                if(line){
                    //console.log(csvHeader);
                    var csvContent =  filterCSVContent(line, csvHeader);
                    dataArray.push(csvContent);
                }
                //console.log(csvContent);
                this.emit("resume");
            }
            
        });

        rl.on('close', function(){
            var json = convertToJSON(dataArray);
            fs.writeFile("data.json", json,{'flags':'a'},function(err){
                logger.error(err);
            });
            //logger.info(JSON.stringify(dataArray));
            logger.info('File has been written' );
        });

}

module.exports = {
    fileReadLine,
    readline,
    setCreateInterfaceSpy
}