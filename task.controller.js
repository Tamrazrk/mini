const { error } = require('console');
const { json } = require('stream/consumers');

const fs = require('fs').promises;

// define the path to the task.json file 
const tasksfillepath = './consig/task.json' ;

// Get - retrieve a list of all task from json file 
const getalltasks = async (req,res) => {
    try {
         const data = await fs.readFile(tasksfilepath,  'utf-8') ;
         const task = json.parse(data) ; 
         res.json(tasks); 
    } catch (err)  { 
        res.status(500).json({ msg: 'internal server error'})
    }

};
//Get - Retrieve a specific task by ID from the JSON file 
const gettask = async (req, res) => 
      taskid = req.params.id;

      try { 

        const data = await fs.readFile(taskfilepath, 'utf-8') ;
        const tasks = json.parse(data);
        const task = task.find((task) => task.id == taskid);
        if (!Task) {

        res.status(404).json({ msg: 'task not found ' }) 

        }

        read.status(200).json(task);
    } catch (err) {
        res.status(500) .json({ msg: 'internal server error '}) 
    }
