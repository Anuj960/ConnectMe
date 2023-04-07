const express= require("express");
const dotenv =require("dotenv")
const {chats} =require('./data/data.js');
const ConnectDB = require("./config/db.js");
const userRoutes= require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes');

const {notFound, errorHandler} =require("./middleware/errormiddleware")


dotenv.config();
const USERNAME= process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
ConnectDB(USERNAME,PASSWORD);
// ConnectDB();
const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("API is Running Succesfully")});

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 3000;

app.listen(3000, console.log(`Server is running on port ${PORT}`));