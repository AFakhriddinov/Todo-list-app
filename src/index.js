import "./style.css";
import TodoList from "./modules/todolist.js";

const list = document.querySelector(".tasks");
const addTodo = document.querySelector(".form");
const description = document.querySelector("#add");
const removeTasks = document.querySelector(".removeAll");

const todoList = new TodoList();

removeTasks.addEventListener("click", () => {
  todoList.cleanCompleted();
  todoList.resetIndex();
  todoList.setStorage();
  todoList.show(list);
});
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (description.value.trim()) {
    todoList.add(description.value);
    todoList.setStorage();
    todoList.resetIndex();
    todoList.show(list);
    addTodo.reset();
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete")) {
    const id = parseInt(e.target.parentElement.id, 10);
    todoList.remove(id);
    todoList.resetIndex();
    todoList.setStorage();
    todoList.show(list);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  todoList.getStorage();
  todoList.show(list);
});
