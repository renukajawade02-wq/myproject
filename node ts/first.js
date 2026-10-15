const http=require('http');
const fs=require("fs");

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
     res.write('<html>');
    res.write('<head><title>Node.js Form</title></head>');
    res.write('<body>');
    res.write('  <h2>Enter Your Details</h2>');
    res.write('  <form method="POST" action="/submit">');
    res.write('    <label for="name">Name:</label>');
    res.write('    <input type="text" id="name" name="name" required><br><br>');
    res.write('    <label for="email">Email:</label>');
    res.write('    <input type="email" id="email" name="email" required><br><br>');
    res.write('    <button type="submit">Submit</button>');
    res.write('  </form>');
    res.write('</body>');
    res.write('</html>');
   return res.end()
  }
  else if(req.url.toLocaleLowerCase()==='/submit-details' && req.method=="post"){
    const body=[];
    req.on("data",(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end",()=>{
      const fullbody=Buffer.concat(body).toString();
      console.log(fullbody);
    })
    fs.writeFileSync("user.txt",'DUMMY');
    res.statusCode=302;//redirection
    res.setHeader('location','/')
  }
  
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>hello world</title></head>');
  res.write('<body><h1>welcome to the jungle baby!!</h1></body>');
  res.write('</html>')
  res.end()
  res 


  
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