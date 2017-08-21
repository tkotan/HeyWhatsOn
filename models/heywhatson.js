const mongoose = require('mongoose');

const heywhatsonSchema = mongoose.Schema({
    title: String,
    description: String
});

const WhatsOn = mongoose.model('WhatsOn', heywhatsonSchema);

module.exports = WhatsOn;
