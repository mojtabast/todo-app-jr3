import { todo_list, reset } from "./store.js";

// Work with Stroage
export const storage_key = "todos";
export const draft_storage_key = "draft";

export function syncStorage() {
  const next_list = JSON.stringify(todo_list);
  localStorage.setItem(storage_key, next_list);
}

export function loadFromStorage() {
  const listFromStorage = JSON.parse(localStorage.getItem(storage_key)) || [];
  reset(listFromStorage);
}

export function updateDraft(char) {
  console.log(char);
  const old_string = localStorage.getItem(draft_storage_key) || "";
  const new_string = old_string + char;

  localStorage.setItem(draft_storage_key, new_string);
}
