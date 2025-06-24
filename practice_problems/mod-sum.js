const sum= (req,res)=>{
    console.log("In sum handler", req.url);

    const body=[];
    req.on('data', chunk => body.push(chunk));
    req.on('end', ()=>{
        body_str= Buffer.concat(body).toString();
        const params= new URLSearchParams(body_str);
        const bodyObj= Object.fromEntries(params);
        const result = Number(bodyObj.first)+Number(bodyObj.second);
        console.log(result);
    })
} 

module.exports= sum;