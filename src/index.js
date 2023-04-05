import _ from 'lodash';
import './style.css';

const array = [
  {
    index: 0,
    description: 'Mow the lawn',
    completed: false,
  },
  {
    index: 1,
    description: 'Feed pets',
    completed: true,
  },
  {
    index: 2,
    description: 'Workout',
    completed: false,
  },
];

const list = document.querySelector('.todos');
window.addEventListener('load', () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].completed === true) {
      list.innerHTML += `
      <div class="list">
        <input class="checkbox" type="checkbox" checked>
        <div class="description">${array[i].description}</div>
        <i class="menu"></i>
      </div>  
  `;
    } else {
      list.innerHTML += `
      <div class="list">
        <input class="checkbox" type="checkbox">
        <div class="description">${array[i].description}</div>
        <i class="menu"></i>
      </div>  
  `;
    }
  }
});
