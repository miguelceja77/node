const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function () {
    const db = config.get('db');
    mongoose.connect(db)
        .then(() => console.log(`Conected to ${db}...`))
        // .catch(err => console.error('Could not connect to MongoDB...', err));
}

