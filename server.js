const express = requiere('express');
const {rrorHandler} =require('./middlewares/utils.js')
const app =express();
const {task_router} = require('./routes/tasks.router.js');

 const dotenv =require('dotenv');
 dotenv.confing();
 app.use(errorhandler);
 //use the task_router for all /api?task routes
 app.use('/api/task',task_router);
 
 //error handling for invalid routes 
 app.use((req,res)=> {
    res.status(404).json({msg: "route not found"});
 });
 const Port =proecess.env.port =2000
 app.listen(port, ()=> { 
    console.log('server is runing port $(port}');
 
 })


