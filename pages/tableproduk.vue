<template>
  <div class="flex justify-center">
    <div class="container">
      <nav class="shadow bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-0 md:mt-6">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Aplikasi Data Produk</span>
          </NuxtLink>
          <div class="w-auto">
            <ul class="flex flex-col mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <NuxtLink to="/" class="block py-2 px-3 text-lg text-blue-700 rounded text-center" aria-current="page">
                  Back to home
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="bg-gray-200 rounded-lg my-10 p-3">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="text-4xl font-bold mb-4">
            Table Sorted
          </div>
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nama
                </th>
                <th scope="col" class="px-6 py-3">
                  Harga
                </th>
                <th scope="col" class="px-6 py-3">
                  Rating
                </th>
                <th scope="col" class="px-6 py-3">
                  Likes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in displayedlistproduk" :key="index" class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {{ item.nama }}
                </th>
                <td class="px-6 py-4">
                  {{ item.harga }}
                </td>
                <td class="px-6 py-4">
                  {{ item.rating }}
                </td>
                <td class="px-6 py-4">
                  {{ item.likes }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between px-6 py-3 bg-gray-100">
            <div class="pt-1">
              Total Produk: {{ listproduk.length }}
            </div>
            <div class="">
              <nav aria-label="Page navigation">
                <ul class="inline-flex">
                  <li class="page-item">
                    <button v-if="page != 1" type="button" class="py-1 px-2 bg-blue-100 mr-3" @click="page--">
                      Previous
                    </button>
                  </li>
                  <li class="page-item">
                    <button v-for="(pageNumber, index) in pages.slice(page-1, page+5)" :key="index" type="button" :class="`${page == pageNumber ? 'bg-blue-300' : 'bg-blue-100'} py-1 px-2 mx-1`" @click="page=pageNumber">
                      {{ pageNumber }}
                    </button>
                  </li>
                  <li class="page-item">
                    <button v-if="page < pages.length" type="button" class="py-1 px-2 bg-blue-100 ml-3" @click="page++">
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    trimWords (value) {
      return value.split(' ').splice(0, 20).join(' ') + '...'
    }
  },
  data () {
    return {
      listproduk: [],
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  computed: {
    displayedlistproduk () {
      return this.paginate(this.listproduk)
    }
  },
  watch: {
    listproduk () {
      this.setPages()
    }
  },
  created () {
    this.getlistproduk()
  },
  methods: {
    getlistproduk () {
      // eslint-disable-next-line eqeqeq
      this.$store.state.produk.listproduk.map((x) => { return this.listproduk.sort((a, b) => a.harga == b.harga ? (a.rating == b.rating ? b.likes - a.likes : b.rating - a.rating) : a.harga - b.harga).push(x) })
    },
    setPages () {
      const numberOfPages = Math.ceil(this.listproduk.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (listproduk) {
      const page = this.page
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      return listproduk.slice(from, to)
    }
  }
}
</script>
