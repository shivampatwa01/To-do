const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes or create mapping
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updatesTodo/:id", updateTodo);
router.put("/deleteTodo/:id", deleteTodo);


//export
module.exports = router; 
