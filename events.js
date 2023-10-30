import { clearInput, renderItem, renderList, title_input } from "./dom.js";
import { addItem } from "./functionality.js";
import { syncStorage, updateDraft } from "./storage.js";
import { reset, todo_list } from "./store.js";

export function onAddItem() {
  const val = title_input.value;

  /* MODEL 1
      if (val === "") {
        alert("You should write a title.");
      } else {
        const item = {
          title: val,
          status: false,
        };
        addItem(item);
        syncStorage();
        renderItem(item);
        clearInput();
      }
    */

  /* MODEL 2
      if (val !== "") {
        const item = {
          title: val,
          status: false,
        };
        addItem(item);
        syncStorage();
        renderItem(item);
        clearInput();
      }
      
      alert("You should write a title.");
    */

  if (val === "") {
    alert("You should write a title.");
    return;
  }

  const item = {
    title: val,
    status: false,
  };
  addItem(item);
  syncStorage();
  renderItem(item);
  clearInput();
}

export function onDeleteAll() {
  const new_list = todo_list.filter((item) => {
    /*
            MODEL 1:
            
            if (item.status === true) {
              return false;
            }
            else{
              return true;
            }
          */
    /*
            MODEL 2:
      
            if (item.status === true) {
              return false;
            }
            return true;
          */
    /* 
            MODEL 3:
            return item.status === true ? false : true;
          */

    // MODEL 4:
    return !item.status;
  });

  reset(new_list);

  syncStorage();
  renderList();
}

export function onType(e) {
  const char = e.key;

  updateDraft(char);
}
