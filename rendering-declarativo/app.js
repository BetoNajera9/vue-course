new Vue({
	el: '#app',

	data() {
		return {
			name: 'Bitcoin',
			symbol: 'BTC',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: 1,
			price: 8800,
			color: 'f4f4f4',
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
			showPrices: false,
		}
	},

	computed: {
		title() {
			return `${this.name} - ${this.symbol}`
		},

		convertedValue() {
			if (!this.value) return 0
			else return this.value / this.price
		},
	},

	watch: {
		showPrices(newVal, oldVal) {
			console.log(newVal, oldVal)
		},
	},

	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices

			this.color = this.color.split('').reverse().join('')
		},
	},
})
