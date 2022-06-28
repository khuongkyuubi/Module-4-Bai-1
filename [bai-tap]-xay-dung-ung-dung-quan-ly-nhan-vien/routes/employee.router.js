const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employee.controller")

router.get("/", employeeController.showEmployee)
router.get("/add", employeeController.renderAddEmployee)
router.post("/add", employeeController.addEmployee)
router.get("/delete", employeeController.renderDeleteEmployee)
router.post("/delete", employeeController.deleteEmployee)


module.exports = router;