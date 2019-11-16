var todoList = {
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Increment number of completed todos as they're completed
    for (var i=0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
      // If all items are completed, make them incomplete
      if (completedTodos === totalTodos) {
        this.todos[i].completed = false;
        // Otherwise, toggle all items back to true
      } else {
        for (var i=0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
    }
  }
};

// This object will now handle clicks, replacing the event listeners
var handlers = {

  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value= '';
    changeTodoTextInput.value= '';
    view.displayTodos();
  },

  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    // Grab reference to the <ul>
    var todosUl = document.querySelector('ul');
    // Clear the todos <ul> as items are added
    todosUl.innerHTML = '';

    for (var i=0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + ' ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + ' ' + todo.todoText;
      }

      // setting the todoLi id property to i, i being the indexed position
      todoLi.id = i;


      // setting each <li> textContent property to the todoTextWithCompletion variable
      todoLi.textContent = todoTextWithCompletion;

      // Appending deleteTodo buttons
      todoLi.appendChild(this.createDeleteButton());

      // Appending todo items
      todosUl.appendChild(todoLi);
    }
  },

  createDeleteButton: function() {
    
  }
};
