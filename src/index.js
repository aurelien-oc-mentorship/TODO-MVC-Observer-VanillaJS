import { TodosModel } from "../models/todos.model";
import { TodosController } from "../controllers/todos.controller";
import { TodosView } from "../views/todos.view";

function main() {
  const model = new TodosModel();
  const controller = new TodosController(model);
  const view = new TodosView(controller);
}

main();
