const express = require('express');

const task_router = express.Router() ;
task_router.use(express.json());
 
const { 
    validatetaskdata 
    
   }   = require('../middlewares/untils.js')
   
   const { 
    getalltask,
    gettask,
    createtask,
    updatetask,
    deletetask,

   } = require('../comtroller/task.controller.js') ;

tasks_router.use(errorhandler)

taask_router.get('/', getalltsk) ;

task_router.get('/:id', gettask);

tasks_router.post('/', validatetskdata, createtask);
tasks_router.post('/' , validatetaskdata, updatetask);

task_router.delete('/:id', deletetask)

module.export = {task_router } ;
