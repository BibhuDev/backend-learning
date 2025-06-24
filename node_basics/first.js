//cretaing a server

const http= require('http');
const server= http.createServer((request,response)=>{
    console.log(request.url, request.method, request.headers);
    response.setHeader('Content-type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Backend learning</title></head>');
    response.write('<body><h1>Hello Everyone</h1></body>');
    response.write('</html>');
    response.end();
});

const PORT=3005;
server.listen(PORT, ()=>{
    console.log(`Server running at address http://localhost:${PORT}`);
}); 

//this is a basic server that shows the same response regardless of the request.
//changing the url does not change the webpage
//so we need to add other conditions to request.url