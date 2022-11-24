const express=require("express")
const app=express()
const cors=require("cors")
const port=2003
const employee={Name:"Sathvik",id:23,address:"Klu"}
const students=require("./data.js")


app.use(cors())

app.get("/",(req,res)=>{
    res.send("we are Indians")
})

app.get("/demo",(req,res)=>{
    res.send("hi there this is a dummy page ")
})
app.get("/emp",(req,res)=>{
    res.json(employee)
})
app.get("/student",(req,res)=>{
    res.json(students)
})

app.listen(port,()=>console.log("server is running on port 2003"))
