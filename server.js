const express = require('express');
const app = express();

const homeRouter = require('./routers/home.js'); 
const todosRouter = require('./routers/todos.js');

require('dotenv').config({path: './config/.env'})

const dataBaseConnection = require('./config/dbconnect.js');
dataBaseConnection();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/todos', todosRouter);

app.listen(process.env.PORT,(req,res)=>{
  console.log("server running on port 2121");
});