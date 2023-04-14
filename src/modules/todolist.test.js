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
});
