<template>
  <div class="flex justify-center">
    <div class="container rounded-lg my-10 shadow-xl bg-gray-200 p-3">
      <div class="grid grid-cols-4 gap-6">
        {{ produk.nama }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produk: this.$store.state.produk.listproduk[this.$route.params.id] ? this.$store.state.produk.listproduk[this.$route.params.id] : this.$router.replace({ path: '/' })
    }
  }
}
</script>
