const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  todoItem: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
  }
  });

  module.exports = mongoose.model('todo', todosSchema);


