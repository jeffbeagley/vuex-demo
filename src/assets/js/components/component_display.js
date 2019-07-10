Vue.component('display-increment', {
	store: store,
	template: `
		<p>
			count: {{ count }}
		</p>
	`,
	computed: {
		...Vuex.mapGetters(['count'])
	}
})
