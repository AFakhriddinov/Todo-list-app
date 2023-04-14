import "./style.css";
import TodoList from "./modules/todolist.js";

const list = document.querySelector(".tasks-list");
const addTodo = document.querySelector(".form");
const descript = document.querySelector("#title");
const remoTasks = document.querySelector(".removeAll");

const todoList = new TodoList();

remoTasks.addEventListener("click", () => {
  todoList.cleanCompleted();
  todoList.setStorage();
  todoList.displayToDo(list);
});
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (descript.value.trim()) {
    todoList.addTask(descript.value);
    todoList.setStorage();
    todoList.resetIndex();
    todoList.displayToDo(list);
    addTodo.reset();
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete")) {
    const id = parseInt(e.target.parentElement.id, 10);
    todoList.removeList(id);
    todoList.resetIndex();
    todoList.setStorage();
    todoList.displayToDo(list);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  todoList.getStorage();
  todoList.displayToDo(list);
});
