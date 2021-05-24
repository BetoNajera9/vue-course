<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',

  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
      isLoading: false
    }
  },

  async created() {
    this.isLoading = true
    try {
      this.assets = await api.getAssets()
    } finally {
      this.isLoading = false
    }
  }
}
</script>
