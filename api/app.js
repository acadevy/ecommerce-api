const express          = require('express');
const env              = require('dotenv');
const path             = require('path');


// /* Relative imports */
const user_router       = require('./routes/users');
const admin_router      = require('./routes/admin/admin_routes');
const category_router      = require('./routes/category');


/* setup express */
const app = express();
env.config();



// import db
require("./db/mongoose");



/* setup middlewares */


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(__dirname));


// /** Routes */
app.use('/api/users', user_router);
app.use('/api/admin', admin_router);
app.use('/api/category',category_router);

app.use((req, res) => {
    return res.status(404).json({ error: 'Not found' });
  });
  
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ error: 'Internal error' });
  });




module.exports = app

