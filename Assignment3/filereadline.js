var fs = require('fs');
const readline = require('readline');
var csvHeader;
var readStream = fs.createReadStream('G20.csv');
var csvContent = [];
var count = 0;

var rl = readline.createInterface({ input:readStream });


 LineObject = function(line){
    this.line=line;
}

LineObject.prototype.processLine= function(){
    var processedLine = [];
    this.line = this.line.replace(/"/g, ''); 
    processedLine = this.line.split(',');
    return processedLine;
}

LineObject.prototype.filterCSVHeader=function(){

    var processedLine = this.processLine();
    csvheader = processedLine;

    return csvheader;
}

LineObject.prototype.getContent=function(){
  
    var that = this;
    this.lineArray = this.processLine();
    var joinObject = new Object;

   

   this.lineArray.map(function(item,index){
       if(index!=0)
            joinObject[csvHeader[index]]=Number(item);
       else
            joinObject[csvHeader[index]]=item;
   });
//    for(var i=0; i<csvheader.length; i++){
            
//             joinObject[csvheader[i]]=lineArray[i];
//         }
   
   return joinObject;

}




rl.on('line', function(line) {

    this.emit("pause", line);
    
});

rl.on('pause', function(line) {
    count++;
    var data;
    if(line){
        var lineObject = new LineObject(line);
    

            if(count==1){
                csvHeader = lineObject.filterCSVHeader();
                this.emit("resume");
            }
            else{
                csvContent.push(lineObject.getContent());
                this.emit("resume");
            }

    }
    
});

rl.on('close', function(){
    console.log(csvContent);
    console.log('Done' );
});

