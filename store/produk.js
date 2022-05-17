/* eslint-disable no-console */
export const state = () => ({
  listproduk: [
    {
      id: 1,
      nama: 'Indomie',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 3000,
      rating: 5,
      likes: 150
    },
    {
      id: 2,
      nama: 'Laptop',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 4000000,
      rating: 4.5,
      likes: 123
    },
    {
      id: 3,
      nama: 'Aqua',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 3000,
      rating: 4,
      likes: 250
    },
    {
      id: 4,
      nama: 'Smart TV',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 4000000,
      rating: 4.5,
      likes: 42
    },
    {
      id: 5,
      nama: 'Headphone',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 4000000,
      rating: 3.5,
      likes: 90
    },
    {
      id: 6,
      nama: 'Very Smart TV',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ornare urna.',
      harga: 4000000,
      rating: 3.5,
      likes: 87
    }
  ]
})

export const mutations = {
  add (state, nama, desc, harga, rating, likes) {
    state.listproduk.push({
      nama,
      desc,
      harga,
      rating,
      likes
    })
  },
  edit (state, { produk }, nama, desc, harga, rating, likes) {
    state.listproduk[state.listproduk.indexOf(produk)]
      ? state.listproduk[state.listproduk.indexOf(produk)] = {
        nama,
        desc,
        harga,
        rating,
        likes
      }
      : console.log('Produk tidak ada.')
  },
  remove (state, { produk }) {
    state.listproduk.splice(state.listproduk.indexOf(produk), 1)
  }
}
