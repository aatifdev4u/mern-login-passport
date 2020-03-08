const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended : false}))

require('./database');

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
    
}



app.listen(PORT, ()=> `Server is running on ${PORT}`)