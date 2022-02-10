const path=require("path");
const express=require("express");
const app=express();
const hbs=require("hbs");
const port=8000;

// console.log(path.join(__dirname,"../public"));
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");

// to set view engine
app.set("view engine","hbs");
app.set("views","templatepath");
hbs.registerPartials(partialspath); 
// built in middleware
app.use(express.static(staticpath))

// if found it will be displayed rest ignored
app.get("/",(req,res)=>{
    res.render("index",{
        name: "Ehtesham Ali",
    });
})

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

app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops page not found for about us",
    });
})

app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops page not found",
    });
})
app.listen(port,()=>{
    console.log(`AT ${port}`);
})