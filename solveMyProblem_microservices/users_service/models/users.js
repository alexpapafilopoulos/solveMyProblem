const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('Users', {
    userID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    credits: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = User;
