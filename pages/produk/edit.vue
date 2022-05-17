<template>
  <div class="flex justify-center">
    <div class="container">
      <nav class="shadow bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-6">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Aplikasi Data Produk</span>
          </NuxtLink>
          <div class="w-auto">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
        <img class="rounded-lg w-1/4 mb-6" src="https://dwii.my.id/preview/wip.webp" alt="">
        <h1 class="text-4xl font-bold mb-3">
          {{ produk.nama }}
        </h1>
        <p class="text-xl mb-3">
          {{ produk.desc }}
        </p>
        <p>
          Harga: {{ produk.harga }}<br>
          Rating: {{ produk.rating }}<br>
          Likes: {{ produk.likes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line eqeqeq
      produk: this.$store.state.produk.listproduk.find(x => x.id == this.$route.params.id) ? this.$store.state.produk.listproduk.find(x => x.id == this.$route.params.id) : this.$router.replace({ path: '/' })
    }
  }
}
</script>
