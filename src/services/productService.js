const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
]

exports.getProducts = () => products

exports.getProductById = (id) => products.find(product => product.id === parseInt(id))
