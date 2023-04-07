import "./style.css";
import { editIndex, checkboxFunction } from "./modules/utilities.js";
import add from "./modules/add.js";
import remove from "./modules/delete.js";

const listContainer = document.querySelector(".listContainer");
const inputText = document.querySelector("#input");
const addBtn = document.querySelector(".submit");
const clearAllBtn = document.querySelector(".completed_all");

// Adding new task;

let tasks = [];

if (localStorage.getItem("to-do") === null) {
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem("to-do"));
}
const setLocalStorage = () => {
  localStorage.setItem("to-do", JSON.stringify(tasks));
};
const displayList = () => {
  listContainer.innerHTML = "";
  let html = "";
  tasks.forEach((task, i) => {
    html += `<div class="items" id = "${i}">
        <li>
          <input type="checkbox" class="checkbox" ${
            task.completed ? "checked" : ""
          }>
          ${task.description}
        </li>
        <div class="icons">
        <i id="edit${i}" class="fas fa-edit hidden"></i>
        <i  id = "trash${i}" class="fas fa-trash-alt hidden"></i>
        <i id = "ellipsis" class="fas fa-ellipsis-v"></i>
        </div>
      </div>`;
    listContainer.innerHTML = html;
  });
};
displayList();
editIndex(tasks);

const items = document.querySelectorAll(".items");
const itemsDelAndEdit = () => {
  items.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      document.querySelector(`#trash${i}`).classList.toggle("hidden");
      document.querySelector(`#edit${i}`).classList.toggle("hidden");

      if (e.target.closest(".fa-trash-alt")) {
        const index =
          e.target.closest(".fa-trash-alt").parentNode.parentNode.id;

        remove(index, tasks);
        editIndex(tasks);
        setLocalStorage(tasks);
        document.location.reload();
      }
      if (e.target.closest(".fa-edit")) {
        const li =
          e.target.closest(".fa-edit").parentNode.previousElementSibling;

        inputText.value = li.textContent.trim();
        inputText.focus();
        const index = li.parentNode.id;
        remove(index, tasks);
      }
    });
  });
};
itemsDelAndEdit();
// Add items to list,
const checkbox = document.querySelectorAll(".checkbox");
checkboxFunction(checkbox, tasks);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  add(tasks, inputText.value, false);
  editIndex(tasks);
  displayList();
  setLocalStorage();
  checkboxFunction(checkbox, tasks);
  inputText.value = "";
  document.location.reload();
});

const filteredTasks = () => {
  tasks = tasks.filter((task, i) => task.completed === false);
  editIndex(tasks);
  setLocalStorage();
  displayList();
};
clearAllBtn.addEventListener("click", () => {
  filteredTasks();
  document.location.reload();
});
