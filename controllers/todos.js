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
  },

  deleteTodoItem: async (req, res) => {
    try{
      await todosDb.findOneAndDelete({_id: req.body.todoId});
      console.log('deleted');
      res.json("deleted");
    }
    catch(err){
      console.log(err);
    }
  },

  markItemComplete: async (req, res) => {
    try{
      await todosDb.findOneAndUpdate({_id: req.body.todosID},{completed: true});
      console.log("marked completed");
      res.json('marked completed');
    }
    catch(err){
      console.log(err);  
    }
  },

  markItemIncomplete: async (req,res) => {
    try{
      await todosDb.findOneAndUpdate({_id: req.body.todosId},{completed: false});
      console.log("marked incompleted");
      res.json('marked compeleted');
    }
    catch(err){
      console.log(err);
    }
  }
}