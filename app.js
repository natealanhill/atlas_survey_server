require("dotenv").config();
let express = require('express');
let app = express();
const sequelize = require('./db');

let user = require('./controllers/usercontroller'); 
let log = require('./controllers/logcontroller'); 
let info = require('./controllers/userinfocontroller');

sequelize.sync();
// sequelize.sync({force: true})
app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user);

app.use('/log', log);

app.use('/info', info);

app.listen(3030, function() {
    console.log("App is listening on port 3030");
})