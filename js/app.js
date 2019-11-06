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
        this,todos[i].completed = false;
        // Otherwise, toggle all items back to true
      } else {
        for (var i=0; i < totalTodos; i++) {
          this,todos[i].completed = true;
        }
      }
    }
    this.displayTodos();
  }
};
