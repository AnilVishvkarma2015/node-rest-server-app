const express = require('express');
const router = express.Router();
const businessService = require('../service/business.service');

function create(req, res, next) {
    businessService.create(req.body)
        .then(() => {
            res.json({ code: 200, message: 'Business Created Successfully.' });
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    businessService.getAll()
        .then(businesses => res.json(businesses))
        .catch(err => next(err));
}

function getById(req, res, next) {
    businessService.getById(req.params.id)
        .then(business => business ? res.json(business) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    businessService.update(req.params.id, req.body)
        .then(() => {
            res.json({ code: 200, message: 'Business Updated Successfully.' });
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    businessService.delete(req.params.id)
        .then(() => {
            res.json({ code: 200, message: 'Business Deleted Successfully.' });
        })
        .catch(err => next(err));
}

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;
