const Sequelize = require('sequelize');
const sequelize = new Sequelize('atlas_survey', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to atlas_survey postgres database');
    },
    function(err){
        console.log(err);
    }
);

Admin = sequelize.import('./models/admin');
Survey = sequelize.import('./models/survey')
Results = sequelize.import('./models/results')

Survey.belongsTo(Admin);
Admin.hasMany(Survey);

Results.belongsTo(Survey);
Survey.hasOne(Results);


module.exports = sequelize;