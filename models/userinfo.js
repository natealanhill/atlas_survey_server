module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define('userinfo', {
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allownull: false,
            validate: {
                isBefore: "2005-01-01"
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate: {
                max: 110
            }
        },
        heightInInches: {
            type: DataTypes.INTEGER,
            allownull: true
        }, 
        weightInPounds: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        goal:{
            type: DataTypes.TEXT, 
            allownull: true
        }
    });
    return UserInfo;
}