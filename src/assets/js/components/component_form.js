Vue.component('form-increment', {
	store: store,
	template: `
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
	`,
	methods: {
		...Vuex.mapMutations(['increment', 'decrement'])
	}
})
