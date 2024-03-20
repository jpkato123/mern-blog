import { configDotenv } from 'dotenv';
import e from 'express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//process.env.MONGO
dotenv.config();
mongoose
.connect(process.env.MONGO)
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