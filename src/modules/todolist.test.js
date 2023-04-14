jest.mock('./todolist.js');

const TodoList = require('./todolist.js');

// Add
describe('addTask', () => {
  it('Add Task', () => {
    const todoList = new TodoList();
    todoList.add('Write code');
    expect(todoList.tasks).toHaveLength(1);
    expect(todoList.tasks[0]).toEqual({
      id: 1,
      description: 'Write code',
      completed: false,
    });
  });

  it('Remove task', () => {
    const todoList = new TodoList();
    todoList.add('Write code');
    todoList.add('Test code');
    todoList.remove(1);
    expect(todoList.tasks).toHaveLength(1);
    expect(todoList.tasks[0]).toEqual({
      id: 2,
      description: 'Test code',
      completed: false,
    });
  });

  // a function for editing the task description you need to run firste

  test('should update the task description', () => {
    // create a new TodoList instance
    const todoList = new TodoList();
    // simulate a change event on the textArea element
    const value = 'Test code';
    todoList.editTask(0, value);
    // assert that the task description has been updated correctly
    expect(todoList.tasks[0].description).toEqual('Test code');
  });

  // Test  the showCompleted function.
  test('showCompleted function sets completed property of all tasks to true', () => {
    const todoList = new TodoList();
    todoList.add('Write code');
    todoList.add('Test code');
    todoList.showCompleted();
    todoList.tasks.forEach((task) => {
      expect(task.completed).toBe(true);
    });
  });

  // Test the "Clear all completed" function.
  test('cleanCompleted should remove all completed tasks from the tasks array', () => {
    const todoList = new TodoList();
    todoList.add('Task 1');
    todoList.add('Task 2');
    todoList.add('Task 3');
    todoList.tasks[1].completed = true;
    todoList.cleanCompleted();
    expect(todoList.tasks.length).toBe(2);
    expect(todoList.tasks[0].description).toBe('Task 1');
    expect(todoList.tasks[1].description).toBe('Task 3');
  });
});
