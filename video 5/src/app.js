const path=require("path");
const express=require("express");
const app=express();
const port=8000;

// console.log(path.join(__dirname,"../public"));
const staticpath=path.join(__dirname,"../public");
// built in middleware
app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    res.write("<h1>Hello World</h1>");
    res.send();
})

app.get("/temp",(req,res)=>{
    res.send([
        {
            id:1,
            name:"vinod",
        }
    ])
})

app.listen(port,()=>{
    console.log(`AT ${port}`);
})