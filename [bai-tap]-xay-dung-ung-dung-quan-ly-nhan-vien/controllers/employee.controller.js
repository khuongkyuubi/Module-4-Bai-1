let employeeData = require("../data/employee.data");

class EmployeeController {
    static employeeID = 1;

    constructor() {

    }

    showEmployee(req, res, next) {

        res.render("employee/employee", {employeeData, tittle: "Employee Manager"})
        next();
    }

    addEmployee(req, res, next) {
        const employee = req.body;

        employee.ID = EmployeeController.employeeID++;
        employeeData.push(employee);
        // res.json(employeeData)
        res.redirect("/employee");
        next();
    }

    renderAddEmployee(req, res, next) {
        res.render("employee/add", {tittle: "Employee Add"})
        next();
    }

    renderDeleteEmployee(req, res, next) {
        const index = parseInt(req.query.index);
        const employee = employeeData[index]
        // res.json(employee)
        res.render("employee/delete", {employee, index, tittle: "Employee Delete"})
        next();
    }

    deleteEmployee(req, res, next) {
        const employeeID = parseInt(req.query.id);
        employeeData = employeeData.filter(employee => employee.ID !== employeeID)
        res.redirect("/employee");
        next()

    }

}

module.exports = new EmployeeController();