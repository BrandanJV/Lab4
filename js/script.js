$("#post").click(TodoPost);
$("#clearTodos").click(clearTodos);
$("#markTodos").click(markTodos);
$("#deleteTodos").click(deleteTodos);

function TodoPost(e){
    e.preventDefault();
    let text = $(".newTodo").val();
    let newInput = $(`<input type="checkbox" name="todo"/> <label>
                        ${text} </label> <br> `);

    $("#todolist").append(newInput);
}

function clearTodos(){
    let todos = $("[name='todo']");
    for(let i=0; i<todos.length;i++){
        todos[i].checked = false;
    }
}

function markTodos(){
    let todos = $("[name = 'todo']");
    for(let i = 0; i  < todos.length; i++){
        todos[i].checked = true;
    }
}

function deleteTodos(){
    $("#todolist").remove();
}