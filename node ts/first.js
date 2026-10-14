const http=require('http');

/*function requestlistner(req,res){
  console.log(req)
}*/
const server=http.createServer((req,res)=>{
  console.log(req)
});

server.listen(3000);