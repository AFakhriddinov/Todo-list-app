import _ from "lodash";
import "./style.css";

const arrays = JSON.parse(localStorage.getItem("List-Details")) || [];

const add = document.querySelector("#add");
const task = document.querySelector(".addInput");

let i = arrays.length + 1;

add.addEventListener("click", () => {
  if (task.value) {
    // let i = Date.now();
    // if (arrays.length === null) {
    //   i = 0;
    // } else {
    //   i = arrays.length + 1;
    // }
    arrays.push({ index: i, description: task.value, completed: false });
    localStorage.setItem("List-Details", JSON.stringify(arrays));
    window.location.reload();
  }
});

// function resetIndex() {
//   let initialIndex = 1;
//   arrays.forEach((array) => {
//     array.index = initialIndex;
//     initialIndex += 1;
//   });
// }

function deleteTasks(index) {
  const remainedTasks = arrays.filter((array) => array.index !== index);
  localStorage.setItem("List-Details", JSON.stringify(remainedTasks));
  window.location.reload();
}

function displayTasks() {
  const taskContent = document.querySelector(".todos");
  for (let i = 0; i < arrays.length; i += 1) {
    // taskContent.innerHTML += ` <div class="list">
    //       <input class="checkbox" type="checkbox">
    //       <div class="description">${arrays[i].description}</div>
    //       <i class="remove" onclick="deleteTasks(${arrays[i].index})"></i>
    //       <i class="menu"></i>
    //   </div>
    // `;
    let div = document.createElement("div");
    div.classList.add("list");

    let input = document.createElement("input");
    input.type = "checkbox";

    let description = document.createElement("div");
    description.classList.add("description");
    description.innerText = arrays[i].description;

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");

    let edit = document.createElement("p");
    edit.innerText = "Edit";
    edit.classList.add("edit");
    let removeBtn = document.createElement("i");
    removeBtn.classList.add("remove");
    removeBtn.onclick = function d() {
      deleteTasks(arrays[i].index);
    };
    mainDiv.appendChild(edit);
    mainDiv.appendChild(removeBtn);

    let icon = document.createElement("p");
    icon.classList.add("menu");

    taskContent.appendChild(div);
    div.appendChild(input);
    div.appendChild(description);
    div.appendChild(mainDiv);
    div.appendChild(icon);
  }
}

window.addEventListener("load", () => {
  displayTasks();
});

// const array = [
//   {
//     index: 0,
//     description: 'Mow the lawn',
//     completed: false,
//   },
//   {
//     index: 1,
//     description: 'Feed pets',
//     completed: true,
//   },
//   {
//     index: 2,
//     description: 'Workout',
//     completed: false,
//   },
// ];

// const list = document.querySelector('.todos');
// window.addEventListener('load', () => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].completed === true) {
//       list.innerHTML += `
//       <div class="list">
//         <input class="checkbox" type="checkbox" checked>
//         <div class="description">${array[i].description}</div>
//         <i class="menu"></i>
//       </div>
//   `;
//     } else {
//       list.innerHTML += `
//       <div class="list">
//         <input class="checkbox" type="checkbox">
//         <div class="description">${array[i].description}</div>
//         <i class="menu"></i>
//       </div>
//   `;
//     }
//   }
// });
