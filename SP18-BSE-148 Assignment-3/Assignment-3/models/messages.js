const { text } = require('express');
var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    user_to: String,
    user_from: String,
    body: String,
    date: String,
    time: String,
    opened: Boolean,
    viewed: Boolean,
    deleted: Boolean,

});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;