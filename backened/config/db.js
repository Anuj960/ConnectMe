const mongoose=require("mongoose")

// import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const ConnectDB =async (username, password) =>{
     // mongodb+srv://anujarya8840:<password>@cluster0.ignw53l.mongodb.net/?retryWrites=true&w=majority

     const URL=`mongodb+srv://${username}:${password}@cluster0.ignw53l.mongodb.net/?retryWrites=true&w=majority`;
          try{
               await mongoose.connect(URL, {useUnifiedTopology:true , useNewUrlParser:true})
               console.log('Database Connected Succesfully')
          }catch(error){
               console.log('Error while connecting with DB', error.message);
               process.exit();
          }
};
module.exports= ConnectDB;