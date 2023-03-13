//Require our models
const Task = require("../models/task");
const asyncWrapper = require("../middleware/aysnc");
//Here we will make all the controller functions then send it to route file

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  console.log(task);
  res.status(201).json({ task });
});

const oneTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    //handle not found errors
    return res.status(404).json({ message: "No Task Found" });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ message: "Not found task" });
  }
  res.status(200).json({ task: null, status: "Deleted successfully" });
});

const updateTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Not found task" });
    }
    res.status(200).json({ task });
});

//Export all this functions
module.exports = {
  getAllTasks,
  createTask,
  oneTask,
  updateTask,
  deleteTask,
};
