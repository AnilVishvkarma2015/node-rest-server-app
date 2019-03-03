const db = require('../shared/dbConnection');
const Product = db.Product;

function getAll() {
    return Product.find();
}

function getById(id) {
    return Product.findById(id);
}

function create(productParams) {
    const product = new Product(productParams);
    return product.save();
}

function update(id, productParams) {
    return Product.findByIdAndUpdate(id, { $set: productParams }, function (err, result) {
        if (err) {
            log.error(err);
        }
        log.info('Product Record Updated:', result);
    });
}

function _delete(id) {
    return Product.findByIdAndRemove(id);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
