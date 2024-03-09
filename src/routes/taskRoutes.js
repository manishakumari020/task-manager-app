const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authenticateToken = require("../middleware/authenticateToken");
//console.log("taskroutes", authenticateToken);

// for creating new task
router.post("/", authenticateToken, taskController.createTask);

// for getting all tasks
router.get("/", authenticateToken, taskController.getAllTasks);
// getting tasks by id
router.get("/:id", authenticateToken, taskController.getTaskById);
// updated tasks
router.put("/:id", authenticateToken, taskController.updateTask);
// deleted task
router.delete("/:id", authenticateToken, taskController.deleteTask);


module.exports = router;
