const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos.js');

router.get('/', todosController.displayTodos);
router.post('/createTodo', todosController.createTodoItem);
router.delete('/deleteTodo', todosController.deleteTodoItem);
router.put('/completed', todosController.markItemComplete);
router.put('/incompleted', todosController.markItemIncomplete);

module.exports = router;
