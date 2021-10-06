require('dotenv').config();
const users=require('./routes/users');
const auth=require('./routes/auth')
const connection =require('./db') //connecting to db.js

const express =require('express');
const app=express();

connection();


app.use(express.json());


app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// https://www.youtube.com/watch?v=qdQaXSj75w4
// this project is all about jwt authentication using mongo DB
// need to install mongoose, express, nodemon, joi