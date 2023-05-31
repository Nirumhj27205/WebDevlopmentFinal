import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const employeeSchema = mongoose.Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    address: String,
    email: String,
    contact: Number,
    academic: String

});

//functions
autoIncrement.initialize(mongoose.connection);
//employeeSchema.plugin(autoIncrement.plugin, 'employee');


//turn into a model
const Employee = mongoose.model('employee', employeeSchema);



export default Employee;