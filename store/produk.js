/* eslint-disable no-console */
const { v4: uuidv4 } = require('uuid')

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
  add (state, produk) {
    if (!produk.edit) {
      state.listproduk.push({
        id: uuidv4(),
        nama: produk.nama,
        desc: produk.desc,
        harga: produk.harga,
        rating: produk.rating,
        likes: produk.likes
      })
    }
    if (produk.edit) {
      // eslint-disable-next-line eqeqeq
      state.listproduk.find(x => x.id == produk.id)
        // eslint-disable-next-line eqeqeq
        ? state.listproduk[state.listproduk.indexOf(state.listproduk.find(x => x.id == produk.id))] = {
          id: produk.id,
          nama: produk.nama,
          desc: produk.desc,
          harga: produk.harga,
          rating: produk.rating,
          likes: produk.likes
        }
        : console.log('Produk tidak ada.')
    }
  },
  remove (state, produk) {
    state.listproduk.splice(state.listproduk.indexOf(produk), 1)
  }
}
