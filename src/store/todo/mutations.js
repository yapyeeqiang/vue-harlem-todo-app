import { mutation } from './index';

export const setTodoInput = mutation('setTodoInput', (state, input) => {
	state.todoInput = input;
});

export const addTodo = mutation('addTodo', (state) => {
	const newTodo = {
		id: window.crypto.randomUUID(),
		item: state.todoInput,
		completed: false,
	};

	state.todos.push(newTodo);
	state.todoInput = '';
});

export const completeTodo = mutation('completeTodo', (state, todoID) => {
	const todo = state.todos.find((todo) => todo.id === todoID);

	todo.completed = !todo.completed;
});

export const deleteTodo = mutation('deleteTodo', (state, todoID) => {
	const todo = state.todos.find((todo) => todo.id === todoID);

	state.todos.splice(state.todos.indexOf(todo), 1);
});
