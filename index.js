import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors);

app.get('/',(res,resp)=>{
    resp.send("this is http surver from jitendra singh");
})

app.listen(8080)