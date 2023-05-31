import Employee from '../model/employee-schema.js';

//add employee => post api => body => body parser handle post request
// Save data of the employee in database
export const addEmployee = async (req, res) => {
    const employee = req.body;

    const newEmployee = new Employee(employee);

    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Get all employers
export const getEmployers = async (req, res) => {
    try {
        const employers = await Employee.find({});
        res.status(200).json(employers);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Get a employee by id
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Save data in edited employee in the database
//edit Employee
export const editEmployee = async (req, res) => {
    let employee = req.body;
    
    //object
    const editEmployee = new Employee(employee);
    try {
        //updateOne for updating one value 
        await Employee.updateOne({ _id: req.params.id }, editEmployee);
        res.status(201).json(editEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deleting data of employee from the database
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.params.id });
        res.status(201).json("Employee deleted Successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}