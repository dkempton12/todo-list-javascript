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
    // first, grab all todos
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // increment # of completed todos with forEach method
    this.todos.forEach(function(todo){
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      // If all items are completed, make them incomplete
      if (completedTodos === totalTodos) {
        todo.completed = false;
        // otherwise toggle the items back to being complete
      } else {
        todo.completed = true;
      }
    });
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
  // Grab a reference to the <ul>
  var todosUl = document.querySelector('ul');
  // this clears the ul before new items are added
  todosUl.innerHTML = '';

  todoList.todos.forEach(function(todo, position) {
    var todoLi = document.createElement('li');
    var todoTextWithCompletion = '';

    if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + ' ' + todo.todoText;
        } else {
          todoTextWithCompletion = '( )' + ' ' + todo.todoText;
    }
    todoLi.id = position;
    // setting each <li> textContent property to the todoTextWithCompletion variable
    todoLi.textContent = todoTextWithCompletion;
    // append delete buttons
    todoLi.appendChild(this.createDeleteButton());
    // appending <li> elements to the todosUl
    todosUl.appendChild(todoLi);
  }, this);
},

  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      console.log(event.target.parentNode.id);

      // get the element that was clicked on
      var elementClicked = event.target;
      // Grabbing the indexed id position, and using the parseInt method to convert the string into the index number,
      // which is passed into handlers.deleteTodo
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

// this runs the event listeners code
view.setUpEventListeners();
