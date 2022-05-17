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
  add (state, produk) {
    state.listproduk.push({
      id: state.listproduk.length + 1,
      nama: produk.nama,
      desc: produk.desc,
      harga: produk.harga,
      rating: produk.rating,
      likes: produk.likes
    })
  },
  edit (state, id, nama, desc, harga, rating, likes) {
    console.log(nama)
    // eslint-disable-next-line eqeqeq
    state.listproduk.find(x => x.id == id)
      // eslint-disable-next-line eqeqeq
      ? state.listproduk[state.listproduk.indexOf(state.listproduk.find(x => x.id == id))] = {
        id,
        nama,
        desc,
        harga,
        rating,
        likes
      }
      : console.log('Produk tidak ada.')
  },
  remove (state, produk) {
    state.listproduk.splice(state.listproduk.indexOf(produk), 1)
  }
}
