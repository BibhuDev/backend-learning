const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url==='/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Backend learning</title></head>');
        res.write('<body><h1>ENTER YOUR DETAILS</h1></body>');
        res.write('<form action="/submit-detais" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('<label for="gender">GENDER</label>')
        res.write('<input type="radio" name="gender" value="male">');
        res.write('<label for="male">MALE</label>')
        res.write('<input type="radio" name="gender" value="female">');
        res.write('<label for="female">FEMALE</label>')
        res.write('<button type="submit">Submit</button>')
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url.toLowerCase()==='/submit-details'&& req.method== "POST"){
        //writing in a file to store the details submitted by the user
        fs.writeFileSync('user.txt', 'Bibhu');
        res.statusCode= 302; // '302' is used for redirection
        res.setHeader('location','/');
        return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Backend learning</title></head>');
    res.write('<body><h1>404 ERROR</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT= 3000;
server.listen(PORT,()=>{
    console.log(`The server is running at address http://localhost:${PORT}`);
});
