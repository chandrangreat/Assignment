var processCSVLine = require('./processCSVLine');

var filterCSVContent = function(line, csvheader){
    var lineArray = processCSVLine(line);

    var joinObject = new Object;


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

module.exports = filterCSVContent;