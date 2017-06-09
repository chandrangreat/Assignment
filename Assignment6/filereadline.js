var fs = require('fs');
var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    //{ type: 'file', filename: 'logs/theLog.log', category: 'Output' }
  ]
});
var logger = log4js.getLogger('Output');
//logger.setLevel('ERROR');

const readline = require('readline');
var csvHeader;
var readStream;

fs.access('G2.csv', fs.constants.F_OK || fs.constants.R_OK, (err) => {
  
  if(!err){

        readStream = fs.createReadStream('G20.csv');
        var dataArray=[];
        var count = 0;

        var rl = readline.createInterface({ input:readStream});

        rl.on('line', function(line) {

            this.emit("pause", line);
            
        });

        rl.on('pause', function(line) {
            count++;

            if(count==1){
                csvHeader = filterCSVHeader(line);
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
            logger.info('File has been written' );
            fs.writeFile("data.json", JSON.stringify(dataArray),{'flags':'a'},function(err){
                logger.error(err);
            });
            logger.info(JSON.stringify(dataArray));
        });

  }else{
      logger.error('File not accessible or does not exist');
  }

});


function filterCSVHeader(line){
    line=line.replace(/"/g, ''); 
    var csvheader = line.split(',');
    return csvheader;
}

function filterCSVContent(line, csvheader){
    data=line.replace(/"/g, ''); 
   var lineArray = data.split(',');
   var joinObject = new Object;
   var content= [];
   //console.log(csvheader);

   lineArray.map(function(item,index){
       if(index!=0)
            joinObject[csvheader[index]]=Number(item);
       else
            joinObject[csvheader[index]]=item;
   });
//    for(var i=0; i<csvheader.length; i++){
            
//             joinObject[csvheader[i]]=lineArray[i];
//         }
   
   return joinObject;

}