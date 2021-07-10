const http= require('http');

const server= http.createServer((req,res)=>{
               if (req.url === '/') {
                              res.end('Welcome to our home page')
               }
               if (req.url === '/about') {
                              res.end('About page ...')
               }
               req.end(`
               <h1>f`)
               
})
server.listen(5000)