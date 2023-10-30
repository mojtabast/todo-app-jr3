import { renderList } from "./dom.js";
import { onAddItem, onDeleteAll, onType } from "./events.js";
import { get_todos_list } from "./api/todos.js";
import { reset } from "./store.js";

const save_button = document.querySelector("#save-btn");
const deleteAll = document.querySelector(".delete-all");
const todo_input = document.querySelector("#title");

// Run your App

function events() {
  save_button.addEventListener("click", onAddItem);
  deleteAll.addEventListener("click", onDeleteAll);
  todo_input.addEventListener("keyup", onType);
}

function init() {
  get_todos_list().then((list) => {
    reset(list);
    renderList();
  });

  events();
}

init();
