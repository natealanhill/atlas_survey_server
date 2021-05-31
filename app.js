require("dotenv").config();
let express = require('express');
let app = express();
const sequelize = require('./db');

let admin = require('./controllers/admincontroller'); 
let survey = require('./controllers/surveycontroller'); 
let results = require('./controllers/resultscontroller');

sequelize.sync();
//sequelize.sync({force: true})
app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/admin', admin);

app.use('/survey', survey);

app.use('/results', results);

app.listen(3030, function() {
    console.log("App is listening on port 3030");
})