const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  oneTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");


//Handle all task routes using controllers
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(oneTask).patch(updateTask).delete(deleteTask)


//Export this file to use it into app.js
module.exports = router;
