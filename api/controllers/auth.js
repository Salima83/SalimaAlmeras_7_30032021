import {db} from "../connect.js"
import bcrypt from "bcryptjs";

export const register = (req,res)=>{
  // check user if exists  

  const q ="SELECT FROM users WHERE username =?"
  db.query(q,[req.body.username],(err,data)=>{
if(err) return res.status(500).json(err)
if(data.lenght)return res.status(409).json("User already exists!")
  
  //create a new user
  //Hash the password
  const salt =bcrypt.genSaltSync(10);
  const hashedPassword=bcrypt.hasheSync(req.body.password, salt)

  const q ="ISERT INTO  users (` username`,`email`,`password`,`name`) VALUE(?)"
 
  const values=[req.body.username,req.body.email,hashedPassword,req.body.name]
  
  db.query(q,[values],(err,data)=>{
    if(err)return res.status(500).json(err)
    return res.status(200).json("User has been created.")

  });
});
};

export const login=(req,res)=>{
    
}


export const logout=(req,res)=>{
    
}