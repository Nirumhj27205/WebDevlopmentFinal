import express from 'express';
import { getEmployers, addEmployee, getEmployeeById, editEmployee, deleteEmployee } from '../controller/employee-controller.js';

const router = express.Router();

//post api => add 
//get Employers
router.get('/', getEmployers);

//add employee
router.post('/add', addEmployee);

//get Employers
router.get('/', getEmployers);

//get employee by id
router.get('/:id', getEmployeeById);

//edit employee by id
router.put('/:id', editEmployee);

//delete employee by id
router.delete('/:id', deleteEmployee);

export default router;