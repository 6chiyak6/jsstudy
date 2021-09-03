const todoForm = document.querySelector("#todo");
const todoList = document.querySelector("#todoList");
const todoInput = todoForm.querySelector("input");

let todos = [];

function savetodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function painttodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.className="button";
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", handledelete);
    li.id=newTodo.id;
    li.className="todoitem";
    span.innerText = "🍍 "+newTodo.text;
    todoList.appendChild(li);
}

function handledelete(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    savetodo();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    painttodo(newTodoObj);
    savetodo();
}
todoForm.addEventListener("submit", handleToDoSubmit);
const Savedtodos = localStorage.getItem("todos");
if (Savedtodos !== null)
{
    const parsedToDo = JSON.parse(Savedtodos);
    parsedToDo.forEach(painttodo);
    todos = parsedToDo;
}
