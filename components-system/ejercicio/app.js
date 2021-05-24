Vue.component('modal', {
	props: ['propertiesModal'],

	data() {
		return {}
	},

	methods: {
		closeModal() {
			this.$emit('close-modal', !this.propertiesModal.showModal)
		},
	},

	template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{this.propertiesModal.title}}</h3>
          <slot name="body"></slot>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>
  `,
})

new Vue({
	el: '#app',

	data() {
		return {
			propertiesModal: {
				showModal: false,
				title: 'The fucking title!!!',
			},
		}
	},

	methods: {
		toggleShowModal(showModal) {
			if (showModal) this.propertiesModal.showModal = showModal
			else this.propertiesModal.showModal = !this.propertiesModal.showModal
		},
	},
})
