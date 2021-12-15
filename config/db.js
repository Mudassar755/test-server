const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURL')

const connectDB =async()=>{
    console.log("db=====>>", db)
    try{
        await mongoose.connect(db);
        console.log('MongoDb Connected...')

    }
    catch(err){
        console.error("Error",err.message);

        process.exit(1)

    }
}
module.exports = connectDB