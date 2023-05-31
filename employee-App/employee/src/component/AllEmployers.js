import react, { useState, useEffect } from 'react';
import { Table, TableRow, TableBody, TableHead, TableCell, styled, Button } from '@mui/material';
//import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getEmployers, deleteEmployee } from './service/api';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
    background: #000000;   
    & > th {
        font-size: 15px;
         color: #fff;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 15px;
       
    }
`;

const AllEmployers = () => {

    //store data => useState() 
    const [employers, setEmployers] = useState([]);

    //mount component, component did-mount
    useEffect(() => {
        getAllEmployers();
    }, []);

    const getAllEmployers = async () => {
        let response = await getEmployers();
        setEmployers(response.data);
    }

    //delete employee => Api call
    const deleteEmployeeDetails = async (id) => {
        await deleteEmployee(id);
        getAllEmployers();
    }

   

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>First Name</TableCell>
                    <TableCell>Middle Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Contact No</TableCell>
                    <TableCell>Education Qualification</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {employers.map((employee) => (
                    <TBody key={employee._id} className="info">
                        {/* <TableCell>{employee._id}</TableCell> change it to employee.id to use JSON Server */}
                        <TableCell>{employee.firstname}</TableCell>
                        <TableCell>{employee.middlename}</TableCell>
                        <TableCell>{employee.lastname}</TableCell>
                        <TableCell>{employee.address}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.contact}</TableCell>
                        <TableCell>{employee.academic}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{ marginRight: 3, marginBottom: 10 }} component={Link} to={`/edit/${employee._id}`}><i class="fa-solid fa-pen faBtn"></i> Edit</Button> {/* change it to employee.id to use JSON Server */}
                            <Button color="secondary" variant="contained" style={{ backgroundColor: "red", marginBottom: 10 }} onClick={() => deleteEmployeeDetails(employee._id)}><i class="fa-solid fa-trash faBtn"></i> Delete</Button> {/* change it to employee.id to use JSON Server */}
                        </TableCell>
                    </TBody>
                ))}
            </TableBody>
        </StyledTable>

        // <StyledTable>
        //     <TableHead>
        //         <THead>
        //             <TableCell>First Name</TableCell>
        //             <TableCell>Middle Name</TableCell>
        //             <TableCell>Last Name</TableCell>
        //             <TableCell>Address</TableCell>
        //             <TableCell>Email</TableCell>
        //             <TableCell>Contact</TableCell>
        //             <TableCell>Academic Qualification</TableCell>
        //             <TableCell></TableCell>
        //         </THead>
        //     </TableHead>
        //     <TableBody>
        //         {employers.map((employee) => (
        //             <TRow key={employee.id}>
        //                 {/* <TableCell>{employee._id}</TableCell> change it to employee.id to use JSON Server */}
        //                 <TableCell>{employee.firstname}</TableCell>
        //                 <TableCell>{employee.middlename}</TableCell>
        //                 <TableCell>{employee.lastname}</TableCell>
        //                 <TableCell>{employee.address}</TableCell>
        //                 <TableCell>{employee.email}</TableCell>
        //                 <TableCell>{employee.contact}</TableCell>
        //                 <TableCell>{employee.academic}</TableCell>
        //                 <TableCell>
        //                     <Button color="primary" variant="contained" style={{ marginRight: 10, marginBottom: 10}} component={Link} to={`/edit/${employee._id}`}>Edit</Button> {/* change it to employee.id to use JSON Server */}
        //                     <Button color="secondary" variant="contained" style={{backgroundColor: "red"}} onClick={() => deleteEmployee(employee._id)}>Delete</Button> {/* change it to employee.id to use JSON Server */}
        //                 </TableCell>
        //             </TRow>
        //         ))}
        //     </TableBody>
        // </StyledTable>
    
    )
}

export default AllEmployers;