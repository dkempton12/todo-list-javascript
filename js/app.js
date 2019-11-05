var todoList = {
  todos: [],

  displayTodos: function() {
    console.log('My To-Dos:', this.todos);
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }
};
