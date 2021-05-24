module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('log', {
        Question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        choice1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice4: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice5: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice6: {
            type: DataTypes.STRING,
            allowNull: true
        },

    })
    return Log;
};