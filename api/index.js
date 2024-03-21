import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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

app.use(express.json());
app.listen(3000,()=>{
    console.log('server is running on port 3000')
});


app.use('/api/user',userRoutes); // --> api/user/test
app.use('/api/auth',authRoutes); //signup api