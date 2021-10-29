// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send("hello world");
// });
// app.listen(3000);

const express = require('express');
const app=express();
const port = process.env.port || 3000;
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.listen('3000');
