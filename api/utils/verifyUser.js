import jwt from "jsonwebtoken";
import {errorHandler} from './error.js'
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(errorHandler(401, ' Unauthorized not signin'))
    }
    jwt.verify(token,process.env.JWT_SCRET,(err,user)=>{
        if(err){
            return next(errorHandler(401,'Unauthorized'));
        }
        req.user = user;
        next();
    })
}