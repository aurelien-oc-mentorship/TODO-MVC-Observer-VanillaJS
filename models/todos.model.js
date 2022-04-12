import Observable from "./observable";

class TodosModel extends Observable {
  constructor() {
    super();
    this.todos = [];
    this.filtredTodos = [];
    this.selection = 'all';
    this.users = [];
    this.currentUser = 'all'
  }

  filterTodosByStatus() {
      console.log(this.selection)
    switch (this.selection) {
      case "all": this.filtredTodos = [...this.todos];break;
      case "completed": this.filtredTodos = [...this.todos.filter(todo => todo.completed)];break;
      case "todo": this.filtredTodos = [...this.todos.filter(todo => !todo.completed)];break;
      default: this.filtredTodos = [...this.todos]
    }
  }
   loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
        .then(todos => {
          this.users = [... new Set(todos.map(todo => todo.userId))]
          this.todos = [...todos];
          this.filterTodosByStatus()
            this.notify(this)
        })
  }
  filterTodosByUserAndStatus(){
      this.filterTodosByStatus();
      console.log(this.currentUser)
      if(this.currentUser !== 'all'){
          this.filtredTodos = this.filtredTodos.filter(todo => todo.userId == this.currentUser)
      }
      this.notify(this)

  }
}

export { TodosModel };
