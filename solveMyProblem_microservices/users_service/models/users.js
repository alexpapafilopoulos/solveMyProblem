const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db'); // Import the Sequelize instance

const User = sequelize.define('User', {
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
}, {
    tableName: 'users', // Specify the table name if different from the model name
    timestamps: false // Disable timestamps (createdAt and updatedAt columns)
});

module.exports = User;
