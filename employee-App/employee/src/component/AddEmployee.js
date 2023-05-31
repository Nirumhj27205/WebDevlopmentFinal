import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addEmployee } from './service/api';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    firstname: '',
    middlename: '',
    lastname: '',
    address: '',
    email: '',
    contact: '',
    academic: ''

}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    padding: 3rem;
    background-image: linear-gradient(40deg, rgb(55 129 89 / 90%),rgba(0,0,0,0.1), rgb(24 118 210 / 84%));
    & > div {
        margin-top: 20px;
`;

//add employee
const AddEmployee = () => {

    //storing data => useState()
    const [employee, setEmployee] = useState(defaultValue);

    //to use navigate to redirect to the link
    let navigate = useNavigate();

    const onValueChange = (e) => {

        //key and value variable => put inside [] bracket
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const addEmployeeDetails = async () => {
        //API call
        await addEmployee(employee);
        navigate('/');
    }

    return (
        <Container className="add-table">
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={employee.firstname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Middle Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='middlename' value={employee.middlename} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={employee.lastname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={employee.address} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={employee.email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value={employee.contact} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Academic Qualification</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='academic' value={employee.academic} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add Employee</Button>
            </FormControl>
        </Container>
    )
}

export default AddEmployee;