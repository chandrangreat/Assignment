var fs = require('fs');
const readline = require('readline');
var csvHeader;
var readStream = fs.createReadStream('G20.csv');
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
        console.log(csvContent);
          this.emit("resume");
    }
    
});

rl.on('close', function(){
    console.log('Done' );
    fs.writeFile("data.json", JSON.stringify(dataArray),{'flags':'a'},function(err){
        console.log(err);
    });
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
   console.log(csvheader);

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