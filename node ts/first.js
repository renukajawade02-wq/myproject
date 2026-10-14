const http=require('http');

/*function requestlistner(req,res){
  console.log(req)
}*/
/*const server=http.createServer((req,res)=>{
  console.log(req);
  process.exit();
});*/
//req.url,req.method,req.headers
/*const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>hello world</title></head>');
   res.write('<body><h1>welcome to the jungle baby!!</h1></body>');
  res.write('</html>')
  res.end()
  process.exit();
});*/

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);

  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>hello world</title></head>');
  res.write('<body><h1>welcome to the jungle baby!!</h1></body>');
  res.write('</html>')
   return res.end()
  }
  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>hello world</title></head>');
  res.write('<body><h1>welcome to the jungle baby!!</h1></body>');
  res.write('</html>')
   return res.end()
  }
  
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>hello world</title></head>');
  res.write('<body><h1>welcome to the jungle baby!!</h1></body>');
  res.write('</html>')
  res.end()
  


  
});

//server.listen(3000);
const port=3000;
server.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`)
});
//hot to exit server loop normally
/*const server=http.createServer((req,res)=>{
  console.log(req)
  process.exit();
});*/