const todosDb = require('../models/todos.js'); 

module.exports = {
  displayTodos: async (req, res) => {
    try{  
      const listOfTodos = await todosDb.find();
      const leftToComplete = await todosDb.countDocuments({completed: true});
      res.render('todos.ejs', {todoitems: listOfTodos, itemLeft: leftToComplete});
    }
    catch(err){
      console.log(err);
    }
  },
  createTodoItem: async (req, res) => {
    try{
      await todosDb.create({todoItem: req.body.todoItem, completed: false});
      console.log('document created in db');
      res.redirect('/todos')
    }
    catch(err){
      console.log(err);
    }
  }
}