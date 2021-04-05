const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    credit: Number,
    description: String, 
    offer_id : Number,
    website : String,
    image : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('offers', NoteSchema); 
