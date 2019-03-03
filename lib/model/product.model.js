const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productSerial: { type: Number, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);