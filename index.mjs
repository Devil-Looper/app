import express from 'express';
const app=express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('This is a server');
});
app.listen(port);