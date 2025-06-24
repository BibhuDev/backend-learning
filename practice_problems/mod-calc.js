const sum= require('./mod-sum');

const calculator = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <html>
                <head>
                <title>Calculator</title>
                </head>
                <body>
                    <h1>WELCOME TO CALCULATOR</h1>
                    <a href="/calculate">GO TO CALCULATOR</a>
                </body>
            </html>`);
        return res.end();
    }
    else if (req.url.toLowerCase() === '/calculate') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
                <html>
                        <head>
                            <title>Add</title>
                        </head>
                        <body>
                            <h1>ADDITION:</h1>
                            <form action="/sum-result" method="POST">
                                <input type="number" name="first" placeholder="Enter number here">
                                <input type="number" name="second" placeholder="Enter number here">
                                <button type="submit">Sum</button>
                            </form>
                        </body>
                </html>`);
    }
    else if(req.url.toLowerCase() === '/sum-result'&& req.method ==='POST'){
        sum(req,res);
        return res.end();
    }
    else{
        res.setHeader('Content-type', 'text/html');
        res.write(`
                <html>
                        <head>
                            <title>Add</title>
                        </head>
                        <body>
                            <h1>404-DNE</h1>
                        </body>
                </html>
            `);
    }

}
module.exports= calculator;