const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    empCode: { type: String, required: true },
    empFirstName: { type: String, required: true },
    empLastName: { type: String, required: true },
    empHrRight: { type: String, required: true },
    empTimesheetRight: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Employee', schema);