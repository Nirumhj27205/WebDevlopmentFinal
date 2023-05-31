//axios => library

import axios from 'axios';

// const URL = 'http://localhost:3003/employers';
const URL = 'http://localhost:3005';

//add employee => POST Request
export const addEmployee = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    }
    catch(error) {
        console.log("Error while calling addEmployee ", error);
    }
}

//getEmployers to get employers data => get request
export const getEmployers = async () => {
    try {
        return await axios.get(`${URL}`)
    }
    catch (error) {
        console.log("Error while calling getEmployers Api", error)
    }
    // id = id || '';
    // return await axios.get(`${URL}/${id}`);
}

//getEmployee by id => get request
export const getEmployee = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    }
    catch (error) {
        console.log("Error while calling getEmployee Api", error)
    }
}

//edit employee => put request
export const editEmployee = async (id, employee) => {
    try {
        return await axios.put(`${URL}/${id}`, employee)

    }
    catch (error) {
        console.log("Error while calling editEmployee Api ", error)
    }
}

//delete employee
export const deleteEmployee = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    }
    catch (error) {
        console.log("Error while calling deleteEmployee Api", error)
    }
}

