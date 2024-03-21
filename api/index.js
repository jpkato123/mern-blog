import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//process.env.REACT_APP_MONGO chua chay
dotenv.config();
// console.log(process.env.REACT_APP_MONGO)
mongoose
.connect(process.env.REACT_APP_MONGO_DB)
.then(()=>{
    console.log('mongodb is connected')
})
.catch(err =>{
console.log(err)
});
const app = express();


app.listen(3000,()=>{
    console.log('server is running on port 3000')
});