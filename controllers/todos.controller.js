class TodosController {
  constructor(model) {
    this.model = model;
    this.selectedItem = '';
  }

  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        this.clickHandler(e.target);
        break;
      case "load":
        this.loadHandler();
      case "change":
        this.changeHandler(e.target)
      default:
        console.log(e.target);
    }
  }

  get modelHeading() {
    return this.model.heading;
  }

  clickHandler(target) {
    console.log(target)
    this.model.selection = target.value;
    this.model.filterTodosByUserAndStatus();
    this.model.notify(this.model);
  }
   loadHandler() {
     this.model.selection = this.selectedItem ?? 'all'
   this.model.loadTodos()
  }
  changeHandler(target){
    if(target.name === 'users'){
      this.model.currentUser = target.value
      this.model.filterTodosByUserAndStatus()
    }

  }
}

export { TodosController };
