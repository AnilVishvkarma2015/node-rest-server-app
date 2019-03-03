const db = require('../shared/dbConnection');
const Employee = db.Employee;

function getAll() {
    return Employee.find();
}

function getById(id) {
    return Employee.findById(id);
}

function create(EmployeeParams) {
    const employee = new Employee(EmployeeParams);
    return employee.save();
}

function update(id, EmployeeParams) {
    return Employee.findByIdAndUpdate(id, { $set: EmployeeParams }, function (err, result) {
        if (err) {
            console.log(err);
        }
        return result;
    });
}

function _delete(id) {
    return Employee.findByIdAndDelete(id);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
