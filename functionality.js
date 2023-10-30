import { todo_list } from "./store.js";
import { syncStorage } from "./storage.js";
import { renderList } from "./dom.js";

// Functionality
export function toggleStatus(title) {
  /* MODEL 1
    for (let i = 0; i < todo_list.length; i++) {
      const list_item = todo_list[i];
  
      if (list_item.title === title) {
        list_item.status = list_item.status ? false : true;
      }
    }
    */

  // Model 2
  todo_list.forEach((list_item) => {
    if (list_item.title === title) {
      /* MODEL 1
         list_item.status = list_item.status ? false : true;
        */
      // MODEL 2
      list_item.status = !list_item.status;
    }
  });

  syncStorage();
}

export function addItem(item) {
  const next_item = {
    title: item.title,
    status: item.status,
  };
  todo_list.push(next_item);
}

export function remove(title) {
  /* MODEL 1
      for (let i = 0; i < todo_list.length; i++) {
        const list_item = todo_list[i];
  
        if (list_item.title === title) {
          todo_list.splice(i, 1);
        }
      }
    */

  // MODEL 2
  todo_list.forEach((list_item, i) => {
    if (list_item.title === title) {
      todo_list.splice(i, 1);
    }
  });
  syncStorage();
  renderList();
}
