const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write(`<html>
                <head>
                <title>MYNTRA-HOME</title>
                </head>
                <body>
                    <ul>
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/men">MEN</a></li>
                        <li><a href="/women">WOMEN</a></li>
                        <li><a href="/kids">KIDS</a></li>
                        <li><a href="/cart">CART</a></li>
                    </ul>
                </body>
            </html>`);
    return res.end();
    }
    else if(req.url === '/home'){
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Welcome to home section</h1>');
    }
    else if(req.url === '/men'){
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Welcome to mens section</h1>');
    }
    else if(req.url === '/women'){
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Welcome to womens section</h1>');
    }
    else if(req.url === '/kids'){
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Welcome to kids section</h1>');
    }
    else if(req.url === '/cart'){
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Welcome to cart</h1>');
    }

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at address http://localhost:${PORT}`);
});