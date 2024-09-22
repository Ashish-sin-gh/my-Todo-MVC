const mongoose = require('mongoose');

module.exports = async () => {
  try{
    const connect = await mongoose.connect(process.env.DB_STRING)
    console.log(`mongoDB connected`);
  }
  catch(err){
    console.error(err);
    process.exit(1);
  }
};