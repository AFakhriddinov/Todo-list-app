jest.mock('./todolist.js');

const TodoList = require('./todolist.js');

// Add

describe('addTask', () => {
  it('Add task', () => {
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
});
