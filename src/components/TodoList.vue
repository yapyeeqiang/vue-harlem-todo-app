<template>
	<ul>
		<li :key="todo.id" v-for="todo in todos">
			<span :class="{ completed__todo: todo.completed }">{{
				todo.item
			}}</span>
			<button @click.prevent="emit('completeTodo', todo.id)">
				{{ todo.completed ? 'Undo' : 'Complete' }}
			</button>
			<button @click.prevent="emit('deleteTodo', todo.id)">Delete</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'TodoList',
	props: {
		todos: {
			type: Array,
			default: [],
		},
	},
	emits: ['deleteTodo', 'completeTodo'],
	setup(_, { emit }) {
		return {
			emit,
		};
	},
};
</script>

<style scoped>
.completed__todo {
	color: green;
	text-decoration: line-through;
}
</style>
