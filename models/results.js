module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define('results', {
        choice1: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        choice2: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        choice3: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        choice4: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        choice5: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        choice6: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

    })
    return Results;
};