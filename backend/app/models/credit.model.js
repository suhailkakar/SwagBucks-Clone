const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    username: String,
    credit: Number,

}, {
    timestamps: true
});

module.exports = mongoose.model('credit', NoteSchema); 
