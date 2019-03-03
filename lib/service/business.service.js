const db = require('../shared/dbConnection');
const Business = db.Business;

function getAll() {
    return Business.find();
}

function getById(id) {
    return Business.findById(id);
}

function create(businessParams) {
    const business = new Business(businessParams);
    return business.save();
}

function update(id, businessParams) {
    return Business.findByIdAndUpdate(id, { $set: businessParams }, function (err, result) {
        if (err) {
            log.error(err);
        }
        log.info('Business Record Updated:', result);
    });
}

function _delete(id) {
    return Business.findByIdAndRemove(id);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
