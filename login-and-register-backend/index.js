import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, ()=>{
    console.log("DB Conneccted")
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    Password:String
})
const User=new mongoose.model("User", userSchema)

//Routes
// app.get("/",(req,res)=>{
//     res.send("My Api")
// })
app.post("/login",(req,res)=>{
    res.send("My Api login")
})

app.post("/register",(req,res)=>{
//    console.log(req.body)
      const {name, email, password} = req.body
      const user = new User({
          name,
          email,
          password
      })
      user.save(err=>{
          if(err){
              res.send(err)
          }else{
              res.send({message:"Successfully Registered"})
          }
      })
})


app.listen(9002,()=>{
    console.log('BE started at port 9002')
})