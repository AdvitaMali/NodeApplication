var exp=require('express')

var app=exp()

app.listen(9000,function(){console.log("server started at 9000")})
app.use(exp.static('public'))

app.get('/gethtml',function(req,res){
res.sendFile(--dirname+"/public/style.html")})
