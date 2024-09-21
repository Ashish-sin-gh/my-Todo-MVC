const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos.js');

router.get('/', todosController.displayTodos);

module.exports = router;
