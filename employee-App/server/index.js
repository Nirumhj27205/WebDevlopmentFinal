//main file
//ES6

import express from "express";

import dbConnection from "./database/db.js";

import dotenv from "dotenv";

import routes from "./routes/route.js";

import cors from "cors";

import bodyParser from "body-parser";

//express
const app = express();

//dotenv
dotenv.config();

//body-parser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//cors
app.use(cors());
//use
app.use('/', routes);

//PORT
const PORT = 3005;

//dotenv 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

//pass username, password
dbConnection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));