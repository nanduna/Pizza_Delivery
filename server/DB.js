const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://nandunabeykoon:nandun123@cluster0.c7qizy8.mongodb.net/mern-pizza';

mongoose.connect(mongoURL);

var DB = mongoose.connection;

DB.on('connected', () => {
    console.log('mongodb connection is successful');
});

DB.on('error', (err) => {
    console.log('mongodb connection has failed:', err);
});

module.exports = mongoose;
