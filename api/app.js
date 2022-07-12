const express          = require('express');
const env              = require('dotenv');


// /* Relative imports */
const user_router       = require('./routes/users');
//const mediaRouter      = require('./routes/media');

/* setup express */
const app = express();
env.config();



// import db
require("./db/mongoose");



/* setup middlewares */


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// /** Routes */
app.use('/api/users', user_router);


app.use((req, res) => {
    return res.status(404).json({ error: 'Not found' });
  });
  
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ error: 'Internal error' });
  });




module.exports = app

