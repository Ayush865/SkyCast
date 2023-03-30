const express=require('express');
const app=express();
const hbs=require('hbs');
const port=3000;
const path=require("path");
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
 
app.use(express.static(staticPath)); 
app.set('views',templatePath);
app.set('view engine','hbs');
hbs.registerPartials(partialsPath);

//routing
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render("about");
}) 

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Page Not Found!" 
    });
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
