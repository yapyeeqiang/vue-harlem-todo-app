<template>
	<form>
		<label>Enter your todo: </label>
		<input
			:value="todoInput"
			@input="emit('update:todoInput', $event.target.value)"
			type="text"
			placeholder="Enter here..."
		/>

		<button @click.prevent="emit('addTodo')">Add Todo</button>
	</form>
</template>

<script>
export default {
	name: 'TodoForm',
	props: {
		todoInput: {
			type: String,
			required: true,
		},
	},
	emits: ['update:todoInput', 'addTodo'],
	setup(_, { emit }) {
		return {
			emit,
		};
	},
};
</script>
