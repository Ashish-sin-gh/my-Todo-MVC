const deletes = document.querySelectorAll('.deleteBtn');
const completedTodo = document.querySelectorAll('span.completed');
const incompletedTodo = document.querySelectorAll('span.not-completed');

console.log(incompletedTodo)

Array.from(deletes).forEach((del) => {
  del.addEventListener('click', deleteTodo);
}); 

Array.from(completedTodo).forEach((item) => {
  item.addEventListener('click', makeIncomplete);
});

Array.from(incompletedTodo).forEach((item) => {
  item.addEventListener('click', makeComplete);
});


async function deleteTodo() {
  const docId = this.parentNode.dataset.id;
  try{
    const response = await fetch('todos/deleteTodo',{
      method: "delete",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        'todoId' : docId
      })
    })

    const data = await response.json();
    console.log(data);
    location.reload();
  }
  catch(err){
    console.error(err)
  }
}

async function makeComplete(){
  const docId = this.parentNode.dataset.id;
  try{
    const response = await fetch('/todos/completed', {
      method: "PUT",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({
        'todosID' : docId
      })
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  }
  catch(err){
    console.log(err);
  }
}

async function makeIncomplete(){
  const docID = this.parentNode.dataset.id;
  
  const response = await fetch('/todos/incompleted', {
    method: "PUT",
    headers:{"content-type":"application/json"},
    body: JSON.stringify({
      'todosId' : docID
    })
  });
  const data = await response.json();
  console.log(data);
  location.reload();
}