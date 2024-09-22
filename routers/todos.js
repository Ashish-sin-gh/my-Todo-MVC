const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos.js');

router.get('/', todosController.displayTodos);
router.post('/createTodo', todosController.createTodoItem);

module.exports = router;
