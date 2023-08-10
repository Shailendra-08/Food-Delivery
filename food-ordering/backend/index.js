const express = require('express');
const app = express();
const port = 5000;
// const mongoDB = require('./db');
const {connectDB} = require("./db");
const userRouter = require('./Routes/CreateUser');
const cors=require("cors");


// mongoDB();
connectDB('mongodb+srv://Food-Panda:Food-Panda@cluster0.ap2wb79.mongodb.net/Food-Panda?retryWrites=true&w=majority')
.then(()=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.log(err.message);
    })
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    
    
    // app.use((req,res,next)=>{
    //     res.setHeader("Access-Control-Allow-Origin","*");
    //     res.header(
    //         "Access-Control-Allow-Origin",
    //         "Origin, X-Requested-With, Content-Type, Accept"
    //     );
    //     res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS")
    //     next();
    // });
    
    
    app.get("/",(req,res)=>{
        res.send("Hello World");
    })
    
    // app.use('/api',require("./Routes/CreateUser"));
    app.use('/api',userRouter);
    
    
    
    app.listen(port,(req,res)=>{
        console.log(`Listning at port number ${port}`);
    })