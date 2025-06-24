const http= require('http');
const calc= require('./mod-calc')
const server= http.createServer(calc);

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running at address http://localhost:${PORT}`);
});