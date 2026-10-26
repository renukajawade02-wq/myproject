const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
  fs.readFile('./web.html','utf-8',(err,data)=>{
    if(err){
      res.write("internal server error")
      res.end()
      return
    }
    res.writeHead(200,{"Content-Type":'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000)