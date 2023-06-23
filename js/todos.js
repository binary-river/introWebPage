
let todos = [];
const todosKey = "todos";
function addTodos(input, list){
    const todo = {
        name:input.value,
        id: Date.now()
    };

    // console.log("todos : " + todos);
    // console.log("list : " + list);
    console.log(todo.id);

    todos.push(todo);
    refreshTodoListOnPage(list);
    localStorage.setItem(todosKey, JSON.stringify(todos));
    input.value = "";
}

function deleteTodos(id, list){
    todos = todos.filter( e => {
        return e.id !== parseInt(id)
    } );

    refreshTodoListOnPage(list);
    localStorage.setItem(todosKey,JSON.stringify(todos));
}

function refreshTodoListOnPage(list){
    clearTodoListOnPage(list);
    drawTodoListOnPage(list);
}

function clearTodoListOnPage(todoList) {
    todoList.innerHTML = "";
}

function drawTodoListOnPage(todoList) {
    todos.forEach((element)=>{
        const li = document.createElement("li");
        li.innerHTML = element.name;
        li.id = element.id;
        li.addEventListener("click", () => {
            console.log(li.id);
            deleteTodos(li.id, todoList);
        })
        todoList.appendChild(li);
    })
}

function loadTodos(list){
    localTodos = localStorage.getItem(todosKey);
    if( localTodos === null ) return;

    todos = JSON.parse(localTodos);
    refreshTodoListOnPage(list);
}
