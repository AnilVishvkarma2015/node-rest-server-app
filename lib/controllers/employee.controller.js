const express = require('express');
const router = express.Router();
const employeeService = require('../service/employee.service');

function create(req, res, next) {
    employeeService.create(req.body)
        .then(() => {
            res.json({ code: 200, message: 'Employee Created Successfully.' });
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    employeeService.getAll()
        .then(employees => res.json(employees))
        .catch(err => next(err));
}

function getById(req, res, next) {
    employeeService.getById(req.params.id)
        .then(employee => employee ? res.json(employee) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    employeeService.update(req.params.id, req.body)
        .then(() => {
            res.json({ code: 200, message: 'Employee Updated Successfully.' });
        })
        .catch(err => next(err));
}

function _delete(req, res, next) {
    employeeService.delete(req.params.id)
        .then(() => {
            res.json({ code: 200, message: 'Employee Deleted Successfully.' });
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
