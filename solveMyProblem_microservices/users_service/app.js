//Importing express module
const express = require('express');
const sequelize = require("./utils/db");


const app = express();
const PORT = 4000;

app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running, "
                + "and App is listening on port "+ PORT)
        else
            console.log("Error occurred, server can't start", error);
    }
);
