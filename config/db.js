const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.mongoURL);
        console.log('MongoDb Connected...')

    }
    catch(err){
        console.error("Error",err.message);

        process.exit(1)

    }
}
module.exports = connectDB