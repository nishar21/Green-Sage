const express = require("express")
const mongoose =  require("mongoose")
const cors = require("cors")
const UserModel= require("./modals/Model")



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/", (req,res) =>{
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.post("/login", (req,res) => {
    const email = req.body.email
    const pass = req.body.password
    console.log(email,pass)
      UserModel.findOne({email:email})
      .then(user => 
        {
            //res.json(user)
            //res.json(user.password)
          if(user.password === pass)
            {res.json("Success")}
            else{
              res.json("the password is incorrect")
            } 
      })
      .catch(err => res.json(err))
  })

app.listen(8080, () =>{
    console.log("server running")
})