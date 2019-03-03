const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const log = require('log4js').getLogger('application');
const logging = require('./lib/logging');
const config = require('config');

const app = express();
logging.initialize();
const port = process.env.PORT || config.get('port');
app.use(cors())
app.use(bodyParser.json());

app.use('/products', require('./lib/controllers/product.controller'));
app.use('/business', require('./lib/controllers/business.controller'));
app.use('/employees', require('./lib/controllers/employee.controller'));

app.listen(port, () => {
    log.warn("Application Server is running on port:", port);
});