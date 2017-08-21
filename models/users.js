const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String
});

const WhatsOn = mongoose.model('WhatsOn', heywhatsonSchema);

module.exports = WhatsOn;
