var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    //{ type: 'file', filename: 'logs/theLog.log', category: 'Output' }
  ]
});
var logger = log4js.getLogger('Output');

module.exports = logger;