var chai = require('chai');
chai.use(require('chai-json-schema'));
var sinon = require('sinon');
var assert = require('chai').assert;
var expect = chai.expect;
var should = chai.should();

var fileReadLine = require('./fileReadLine.js');
var processCSVLine = require('./processCSVLine');
var filterCSVContent = require('./filterCSVContent');
var filterCSVHeader = require('./filterCSVHeader');


describe('processCSVLine Function Tests', function(){
    var line = '"Argentina","2766890","40.79","41.26","41.73","42.2","42.64","43.1","461.65","558.68","607.6","622.05","543.06","578.71","11318.2","13540.01","14559.04","14739.6","12735.6","13428.32","784.28","867.6","890.67","931.3","951","964.28"';
    var output = ['Argentina','2766890','40.79','41.26','41.73','42.2','42.64','43.1','461.65','558.68','607.6','622.05','543.06','578.71','11318.2','13540.01','14559.04','14739.6','12735.6','13428.32','784.28','867.6','890.67','931.3','951','964.28'];
    
    it('returns an array', function(){
        //assert.equal(processCSVLine(line), output);
        expect(processCSVLine(line)).to.be.a('array');
        //expect(processCSVLine(line)).to.equal(output);
        //processedLine.should.be.a('array');
    });
    
    it('returns desired output', function(){
        expect(processCSVLine(line)).to.deep.equal(output);
    });
  
});

describe('filterCSVHeader Function Tests', function(){

    var csvheader = '"Country Name","Area (Sq. Km.) 2010","Population (Millions) 2010","Population (Millions) 2011","Population (Millions) 2012","Population (Millions) 2013","Population (Millions) 2014","Population (Millions) 2015","GDP Billions (USD) 2010","GDP Billions (USD) 2011","GDP Billions (USD) 2012","GDP Billions (USD) 2013","GDP Billions (USD) 2014","GDP Billions (USD) 2015","Gross Domestic Product Per Capita Income at Current Price (USD) 2010","Gross Domestic Product Per Capita Income at Current Price (USD) 2011","Gross Domestic Product Per Capita Income at Current Price (USD) 2012","Gross Domestic Product Per Capita Income at Current Price (USD) 2013","Gross Domestic Product Per Capita Income at Current Price (USD) 2014","Gross Domestic Product Per Capita Income at Current Price (USD) 2015","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2010","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2011","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2012","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2014","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2015"';
    var output = ['Country Name','Area (Sq. Km.) 2010','Population (Millions) 2010','Population (Millions) 2011','Population (Millions) 2012','Population (Millions) 2013','Population (Millions) 2014','Population (Millions) 2015','GDP Billions (USD) 2010','GDP Billions (USD) 2011','GDP Billions (USD) 2012','GDP Billions (USD) 2013','GDP Billions (USD) 2014','GDP Billions (USD) 2015','Gross Domestic Product Per Capita Income at Current Price (USD) 2010','Gross Domestic Product Per Capita Income at Current Price (USD) 2011','Gross Domestic Product Per Capita Income at Current Price (USD) 2012','Gross Domestic Product Per Capita Income at Current Price (USD) 2013','Gross Domestic Product Per Capita Income at Current Price (USD) 2014','Gross Domestic Product Per Capita Income at Current Price (USD) 2015','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2010','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2011','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2012','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2014','Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2015']    

    it('returns an array', function(){
        expect(filterCSVHeader(csvheader)).to.be.a('array');
    });

    it('returns desired output', function(){
        expect(filterCSVHeader(csvheader)).to.deep.equal(output);
    });

});

describe('filterCSVContent Function Tests', function(){

    var line = '"Argentina","2766890","40.79","41.26","41.73","42.2","42.64","43.1","461.65","558.68","607.6","622.05","543.06","578.71","11318.2","13540.01","14559.04","14739.6","12735.6","13428.32","784.28","867.6","890.67","931.3","951","964.28"';    
    var csvheader = '"Country Name","Area (Sq. Km.) 2010","Population (Millions) 2010","Population (Millions) 2011","Population (Millions) 2012","Population (Millions) 2013","Population (Millions) 2014","Population (Millions) 2015","GDP Billions (USD) 2010","GDP Billions (USD) 2011","GDP Billions (USD) 2012","GDP Billions (USD) 2013","GDP Billions (USD) 2014","GDP Billions (USD) 2015","Gross Domestic Product Per Capita Income at Current Price (USD) 2010","Gross Domestic Product Per Capita Income at Current Price (USD) 2011","Gross Domestic Product Per Capita Income at Current Price (USD) 2012","Gross Domestic Product Per Capita Income at Current Price (USD) 2013","Gross Domestic Product Per Capita Income at Current Price (USD) 2014","Gross Domestic Product Per Capita Income at Current Price (USD) 2015","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2010","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2011","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2012","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2014","Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2015"';
    var output = {
        "Country Name": "Argentina",
        "Area (Sq. Km.) 2010": 2766890,
        "Population (Millions) 2010": 40.79,
        "Population (Millions) 2011": 41.26,
        "Population (Millions) 2012": 41.73,
        "Population (Millions) 2013": 42.2,
        "Population (Millions) 2014": 42.64,
        "Population (Millions) 2015": 43.1,
        "GDP Billions (USD) 2010": 461.65,
        "GDP Billions (USD) 2011": 558.68,
        "GDP Billions (USD) 2012": 607.6,
        "GDP Billions (USD) 2013": 622.05,
        "GDP Billions (USD) 2014": 543.06,
        "GDP Billions (USD) 2015": 578.71,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2010": 11318.2,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2011": 13540.01,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2012": 14559.04,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2013": 14739.6,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2014": 12735.6,
        "Gross Domestic Product Per Capita Income at Current Price (USD) 2015": 13428.32,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2010": 784.28,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2011": 867.6,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2012": 890.67,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2013": 931.3,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2014": 951,
        "Gross domestic product based on Purchasing-Power-Parity (PPP) valuation of Country GDP in Billions (Current International Dollar) 2015": 964.28
    };


    it('returns an object with key value pairs', function(){
        expect(filterCSVContent(line, filterCSVHeader(csvheader))).to.be.a('object');
    });

    it('returns desired output', function(){
        expect(filterCSVContent(line, filterCSVHeader(csvheader))).to.deep.equal(output);
    });

});



// Function Tests using Sinon
describe('Function call Tests', function(){

    before(function() {
        //sinon.spy(fileReadLine.readline, "createInterface");
    });
    
    it('should call readline.createInterface 1 time', function(){
       // console.log(fileReadLine.readline.createInterface.calledOnce);
        sinon.assert.calledOnce(fileReadLine.setCreateInterfaceSpy);

    });
});
