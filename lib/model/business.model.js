const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    personName: { type: String, required: true },
    businessName: { type: String, required: true },
    gstNumber: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Business', schema);