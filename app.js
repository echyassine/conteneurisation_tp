const express=require('express');
const app = express();
const path=require('path');


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));

});
app.use('/images', express.static(__dirname +'/images')); 

app.listen(8080);