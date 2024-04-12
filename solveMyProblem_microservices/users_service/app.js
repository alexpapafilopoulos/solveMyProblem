const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 4000;

app.use(express.json());

const mysql = require("mysql2");

const {User} =require("./models/users");


app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
