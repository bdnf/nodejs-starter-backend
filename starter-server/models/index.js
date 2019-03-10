const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise
const option = {
    useNewUrlParser: true,
    socketTimeoutMS: 30000,

    keepAlive: true,
    reconnectTries: 30000
};

const mongoUrl = process.env.MONGOURL || 'mongodb://mongo:27017/api-data'

mongoose.connect(mongourl, option).then(function(){
    console.log('Successfully connected to database');
}, function(err) {
    console.log('Not connected to database ' + err);
});


module.exports.User = require("./user");
