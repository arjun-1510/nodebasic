const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeImage = readFileSync('./navbar/logo.png')
const homeLogic = readFileSync('./navbar/browser-app.js')

const server = http.createServer((req,res) => {
  const url = req.url;

  // Home Page
  if (url === '/') {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write(homePage)
     res.end()
   

  // about page

  } 
  
  else if(url === '/about') {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>Hello this is About page</h1>')
     res.end()
      
  }


  else if(url === '/styles.css') {
    res.writeHead(200,{'content-type': 'text/css'})
    res.write(homeStyles)
     res.end()
      
  }

  // Image logo

  else if(url === '/logo.png') {
    res.writeHead(200,{'content-type': 'image/png'})
    res.write(homeImage)
     res.end()
      
  }
   //Logic
  else if(url === '/browser-app.js') {
    res.writeHead(200,{'content-type': 'text/javascript'})
    res.write(homeLogic)
     res.end()
      
  }

  // Error Page
  else {
    res.writeHead(404,{'content-type': 'text/html'})
    res.write('<h1>404 Page</h1>')
    res.end()
  }



 
})

server.listen(5000)


