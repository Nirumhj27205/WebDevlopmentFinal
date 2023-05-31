import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {  editEmployee, getEmployee } from './service/api';

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
    & > div {
        margin-top: 20px
`;

const EditEmployee = () => {
    const [employee, setEmployee] = useState(defaultValue);

    //params => object
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadEmployeeDetails();
    }, []);

    const loadEmployeeDetails = async () => {
        const response = await getEmployee(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = async () => {
        const response = await editEmployee(id, employee);
        navigate('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Employee</Typography>
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
                <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit Employee</Button>
            </FormControl>
        </Container>
    )
}

export default EditEmployee;