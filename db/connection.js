const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

module.exports = db;
