import { todo_list } from "./store.js";
import { toggleStatus, remove } from "./functionality.js";

// Work with DOM
const list = document.querySelector(".list");
export const title_input = document.querySelector("#title");

export function renderItem(todo_item) {
  // <div class="item">
  const item = document.createElement("div");
  item.classList.add("todo");

  // <input type="checkbox" />
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo_item.status;

  // <span>Item 1</span>
  const span = document.createElement("span");
  span.textContent = todo_item.title;

  // <button class="delete">delete</button>
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(deleteButton);

  list.appendChild(item);

  checkbox.addEventListener("click", () => {
    toggleStatus(todo_item.title);
  });

  deleteButton.addEventListener("click", () => {
    remove(todo_item.title);
  });
}

export function renderList() {
  // Remove old items
  list.innerHTML = "";

  // Render items

  /* MODEL 1 
      for (let i = 0; i < todo_list.length; i++) {
        const item = todo_list[i];
        renderItem(item);
      }
    */

  // MODEL 2
  todo_list.forEach((item) => {
    renderItem(item);
  });
}

export function clearInput() {
  title_input.value = "";
}
