const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('connected to MongoDB')
    }catch(err){
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDB;