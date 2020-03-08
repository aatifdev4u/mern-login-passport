const mongoose = require('mongoose');
const keys = require('./config/keys')

module.exports = mongoose.connect(
    keys.mongodbURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("MongoDB successfully connected");
})
.catch(err => console.log(err))