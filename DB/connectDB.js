const mongoose = require('mongoose');
function connectedDB() {

    mongoose.connect('mongodb://127.0.0.1:27017/MCA')

        .then(() => {
            console.log("DB is connected");
        })
        .catch(() => {
            console.log("DB not connection");
        })
}

module.exports = connectedDB;


