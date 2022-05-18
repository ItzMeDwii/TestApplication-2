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
                <NuxtLink to="/tableproduk" class="block py-2 px-3 text-lg text-blue-700 rounded text-center" aria-current="page">
                  Table Produk
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/kalkulator" class="block py-2 px-3 text-lg text-blue-700 rounded text-center" aria-current="page">
                  Kalkulator
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/produk/add" class="block py-2 px-3 text-lg bg-blue-700 text-white rounded text-center" aria-current="page">
                  Add Produk
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 bg-gray-200 rounded-lg my-10 p-3">
        <div v-for="(item, index) in listproduk" :key="index" class="max-w bg-white rounded-lg border border-gray-200 shadow-md">
          <img class="rounded-t-lg" src="https://dwii.my.id/preview/wip.webp" alt="">

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ item.nama }}
            </h5>
            <NuxtLink :to="`/produk/${item.id}`" class="m-1 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Lihat Produk
            </NuxtLink>
            <NuxtLink :to="`/produk/edit/${item.id}`" class="m-1 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
              Edit Produk
            </NuxtLink>
            <button class="m-1 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300" @click="removeProduk(item)">
              Hapus Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listproduk () {
      return this.$store.state.produk.listproduk
    }
  },
  methods: {
    removeProduk (produk) {
      this.$store.commit('produk/remove', produk)
    }
  }
}
</script>
