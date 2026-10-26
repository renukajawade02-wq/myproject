const http=require('http')


const server=http.createServer((req,resp)=>{
   resp.setHeader("Content-Type","text/html")
   resp.write("<h2>arcade</h2>")
   resp.write(`
    <html>
    <head> 
       <title>ARCADE</TITLE>
    </head>
    <body>
       <h1>fuck this shit</h1>
       <p>a braoken heart is all thats left i am still fixing all the cracks lost the couple of pieces when i carried it carried it carried it home</p>
      </body>
      </html>
    `)
   resp.end('you know you love me more')
   process.exit()
})

server.listen(3000)