const http=require('http')

const userdata=[
  {
    name:'renuka',
    age:19,
    networth:'0 dollars'
  },
  {
    name:'ayra',
    age:20,
    networth:'one billion dollars'
  },
  {
    name:'valarie',
    age:19,
    networth:'potential '
  }
]
http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/JSON")
    res.write(JSON.stringify(userdata))
    res.end()
}).listen(2000)