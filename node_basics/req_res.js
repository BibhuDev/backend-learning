const http= require('http');
const server= http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    if(req.url==='/'){ //default url
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Backend learning</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/products'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Backend learning</title></head>');
        res.write('<body><h1>Explore our products:</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Backend learning</title></head>');
    res.write('<body><h1>404 ERROR</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT=3005;
server.listen(PORT, ()=>{
    console.log(`Server running at address http://localhost:${PORT}`);
}); 
