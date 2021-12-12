<template>
	<h1>Vue Harlem Todo App</h1>

	<TodoForm v-model:todoInput="todoInput" @addTodo="addTodo" />

	<TodoList
		:todos="state.todos"
		@completeTodo="completeTodo"
		@deleteTodo="deleteTodo"
	/>
</template>

<script>
import { computed } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import { state } from './store/todo';
import {
	setTodoInput,
	addTodo,
	completeTodo,
	deleteTodo,
} from './store/todo/mutations';

export default {
	name: 'App',
	components: {
		TodoForm,
		TodoList,
	},
	setup() {
		const todoInput = computed({
			get: () => state.todoInput,
			set: (value) => setTodoInput(value),
		});

		return {
			state,
			todoInput,
			addTodo,
			completeTodo,
			deleteTodo,
		};
	},
};
</script>
