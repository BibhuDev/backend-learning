const http= require('http');
const userHandle= require('./input');

const server= http.createServer(userHandle);


const PORT= 3000;
server.listen(PORT,()=>{
    console.log(`The server is running at address http://localhost:${PORT}`);
});