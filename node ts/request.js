const http=require('http')

http.createServer((req,res)=>{
  console.log(req.method)
  if(req.url=="/"){
    res.write("<h1>home page </h1>")
  }
  else if(req.url=="/login"){
    res.write("<h1>login page</h1> ")
  }
  else{
    res.write("other page")
  }

  
  res.end("well tata")
}).listen(5000)