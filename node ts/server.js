//creating server,it dosent have by default server
const http=require('http');
http.createServer((req,res)=>{
  //request=client send
  //response=server send karta hai
  res.write("<h1>this is renuka jawade</h1>")
  res.end("hello!")
}).listen(4800);