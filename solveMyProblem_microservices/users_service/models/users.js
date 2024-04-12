module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Users', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'Users',
        schema: process.env.DB_SCHEMA,
        timestamps: false,
        indexes: [{
            name: "Users_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        }, ]
    });
};