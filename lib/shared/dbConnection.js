const mongoose = require('mongoose');
const config = require('config');
const log = require('log4js').getLogger('application');

DB_URL = config.get('MONGODB_URL');

mongoose.connect(DB_URL, {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
})
    .then(() => log.info('Application connected to MongoDB Successfully.'))
    .catch((err) => log.error(err));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise;

module.exports = {
    Product: require('../model/product.model'),
    Business: require('../model/business.model'),
    Employee: require('../model/employee.model')
};



