const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 4000;

app.use(express.json());

const sequelize= require('./utils/db');
const DataTypes = require("sequelize").DataTypes;

const users = require ('./models/users');
const user_init = users(sequelize,DataTypes);

app.use('/users', userRoutes);

sequelize.sync().then((req)=> {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
