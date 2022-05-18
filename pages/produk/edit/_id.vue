<template>
  <div class="flex justify-center">
    <div class="container">
      <nav class="shadow bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-0 md:mt-6">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Aplikasi Data Produk</span>
          </NuxtLink>
          <div class="w-auto">
            <ul class="flex flex-col lg:mt-4 mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <NuxtLink to="/" class="block py-2 px-3 text-lg text-blue-700 rounded text-center" aria-current="page">
                  Back to home
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="rounded-lg my-10 shadow-xl bg-gray-200 p-3">
        <h1 class="text-4xl font-bold mb-5">
          Edit Produk: {{ produk.nama }}
        </h1>
        <form action="javascript:void(0)" @submit="editProduk(produk)">
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label for="nama" class="block mb-2 text-sm font-medium text-gray-900">Nama</label>
              <input
                id="nama"
                v-model="produk.nama"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              >
            </div>
            <div>
              <label for="desc" class="block mb-2 text-sm font-medium text-gray-900">Deskripsi</label>
              <input
                id="desc"
                v-model="produk.desc"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              >
            </div>
            <div>
              <label for="harga" class="block mb-2 text-sm font-medium text-gray-900">Harga</label>
              <input
                id="harga"
                v-model="produk.harga"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              >
            </div>
            <div>
              <label for="rating" class="block mb-2 text-sm font-medium text-gray-900">Rating</label>
              <input
                id="rating"
                v-model="produk.rating"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              >
            </div>
            <div>
              <label for="likes" class="block mb-2 text-sm font-medium text-gray-900">Likes</label>
              <input
                id="likes"
                v-model="produk.likes"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              >
            </div>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line eqeqeq
      produk: {
        id: '',
        nama: '',
        desc: '',
        harga: '',
        rating: '',
        likes: '',
        edit: true
      },
      // eslint-disable-next-line eqeqeq
      importProduk: this.$store.state.produk.listproduk.find(x => x.id == this.$route.params.id) ? this.$store.state.produk.listproduk.find(x => x.id == this.$route.params.id) : this.$router.replace({ path: '/' })
    }
  },
  created () {
    this.produk = {
      id: this.importProduk.id,
      nama: this.importProduk.nama,
      desc: this.importProduk.desc,
      harga: this.importProduk.harga,
      rating: this.importProduk.rating,
      likes: this.importProduk.likes,
      edit: true
    }
  },
  methods: {
    editProduk (produk) {
      this.$router.replace({ path: '/' })
      // eslint-disable-next-line no-console
      this.$store.commit('produk/add', produk)
    }
  }
}
</script>
