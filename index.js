const fs=require("fs")
const http=require("http")
fs.writeFile("index.html","<h1> Hello World </h1> \n<p> This is Rahul </p>",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})
const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-type":"text/html"})
    fs.readFile("index.html","utf-8",(err,data)=>{
        res.end(data)
    })
})

server.listen(5000,()=>console.log("server started"))