const express=require ('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const mypath=path.join(__dirname,"../public")
const mypartials=path.join(__dirname,"../partials")
app.use(express.static(mypath))
app.set("view engine","hbs")
hbs.registerPartials(mypartials)
app.get("/",(req,res)=>{


res.render('index')


})
app.get("/service",(req,res)=>{

res.render('service')

})

app.get("/project",(req,res)=>{

res.render('project')

})

app.get("/blog",(req,res)=>{

res.render('blog')

})
app.listen(3000)