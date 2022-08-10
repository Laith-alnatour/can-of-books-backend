const mongoose = require('mongoose');



const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    image : String,
    status: Boolean
});

module.exports = BooksSchema