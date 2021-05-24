Vue.component('CoinDetail', {
	props: ['coin'],

	data() {
		return { showPrices: false, value: 0 }
	},

	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices

			this.$emit('change-color', this.showPrices ? 'FF96CB' : this.coin.color)
		},
	},

	computed: {
		title() {
			return `${this.coin.name} - ${this.coin.symbol}`
		},
		convertedValue() {
			if (!this.value) return 0
			else return this.value / this.coin.price
		},
	},

	created() {
		console.log('created child')
	},
	mounted() {
		console.log('mounted child')
	},

	template: `
		<div>
			<img
			mg
				v-on:mouseover="toggleShowPrices"
				v-on:mouseout="toggleShowPrices"
				v-bind:src="coin.img"
				v-bind:alt="coin.name"
			/>

			<h1 v-bind:class="coin.changePercent < 0 ? 'red' : 'green' ">
				{{ title }}
				<span v-if="coin.changePercent > 0">👍🏼</span>
				<span v-else-if="coin.changePercent < 0">👎🏼</span>
				<span v-else>🤞🏼</span>
				<span v-on:click="toggleShowPrices">{{showPrices ? '🙉' : '🙈'}}</span>
			</h1>

			<input type="number" v-model="value" />
			<span>{{ convertedValue }}</span>

			<slot name="text"></slot>
			<slot name="link"></slot>

			<ul v-show="showPrices">
				<li
					v-for="(p, i) in coin.pricesWithDays"
					v-bind:class="{orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price}"
					v-bind:key="p.day"
				>
					{{i}} - {{p.day}} - {{p.value}}
				</li>
			</ul>
		</div>
	`,
})

new Vue({
	el: '#app',

	data() {
		return {
			btc: {
				name: 'Bitcoin',
				symbol: 'BTC',
				img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
				changePercent: 1,
				price: 8800,
				prices: [1300, 4000, 300, 4000, 7893, 8093, 8974, 8064, 3095],
				value: 0,
				pricesWithDays: [
					{
						day: 'Lunes',
						value: 8800,
					},
					{
						day: 'Martes',
						value: 9876,
					},
					{
						day: 'Miercoles',
						value: 8460,
					},
					{
						day: 'Jueves',
						value: 8457,
					},
					{
						day: 'Viernes',
						value: 2605,
					},
					{
						day: 'Sabado',
						value: 7538,
					},
					{
						day: 'Domingo',
						value: 8430,
					},
				],
			},
			color: 'f4f4f4',
		}
	},

	created() {
		console.log('created')
	},
	mounted() {
		console.log('mounted')
	},

	methods: {
		updateColor(color) {
			this.color = color ?? this.color.split('').reverse().join('')
		},
	},
})
