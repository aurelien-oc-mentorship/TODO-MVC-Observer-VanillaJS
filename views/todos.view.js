import Observer from "./observer";

class TodosView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    //DOM Elements
    this.todos = document.getElementById("todo-list");
    this.selectors = Array.from(document.querySelectorAll('input[name="status"]'))
    this.users = document.querySelector('#users');
    this.controller.selectedItem = this.selectors.find(sel => sel.checked)?.value

    //DOM EventsListeners
    this.selectors.forEach(selector => selector.addEventListener("click", controller));
    window.addEventListener('load', () => { controller.loadHandler()})
    this.users.addEventListener('change', controller)

    //Adding Observers
    this.controller.model.addObserver(this);

  }

  update(model) {
    this.todos.innerHTML = this.displayTodos(model.filtredTodos);
    this.users.innerHTML = this.displayUsers(model.users, model.currentUser)
  }

  displayTodos(todos){
    console.log(todos)
    return todos.map(todo => {
      const cssClass = todo.completed ? 'done' : 'todo';
      return `<li class="${cssClass}">${todo.title}</li>`
    }).join('');

  }

  displayUsers(users, current){
    let options = `<option ${current == 'all'? 'selected' : ''}>all</option>`;
    options += users.map(user => `<option ${current == user ? 'selected' : ''}>${user}</option>`).join('')
    return options
  }
}

export { TodosView };
