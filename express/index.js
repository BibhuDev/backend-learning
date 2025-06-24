const express= require('express');

const app= express();

app.get('/', (req,res)=>{
    res.send("Hello world!");
});

//dynamic parameter 
app.get('/user/:username', (req,res)=>{
    const username= req.params.username;
    res.send(`Welcome ${username}`);
});

//query is used for searching
// ..../search?keyword=input

app.get('/search', (req,res)=>{
    const keyword= req.query.keyword;
    res.send(`Searching for ${keyword}`);
})

app.listen(3000, ()=>{
    console.log("Server is running at address http://localhost:3000");
}); 