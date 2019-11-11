var todoList = {
  todos: [],

  displayTodos: function() {
    // Let user know if todo list is empty
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My todos');
      for (var i=0; i < this.todos.length; i++) {
        // Display todos as completed
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
          // Otherwise, display todos as incomplete
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

// This object will now handle clicks, replacing the event listeners
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },

  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value= '';
    changeTodoTextInput.value= '';
  },

  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },

  toggleAll: function() {
    todoList.toggleAll();
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
    }

  }
};
