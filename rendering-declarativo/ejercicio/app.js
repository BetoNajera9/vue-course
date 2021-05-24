new Vue({
	el: '#app',

	data() {
		return {
			courseName: '',
			hours: 0,
			courses: [],
		}
	},

	computed: {
		totalHours() {
			let total = 0
			this.courses.map((course) => (total += parseInt(course.hours)))
			return total
		},
	},

	methods: {
		addCourse() {
			if (this.hours > 0) {
				if (this.courseName) {
					this.courses.push({
						courseName: this.courseName,
						hours: this.hours,
					})
				}
			}
		},
	},
})
