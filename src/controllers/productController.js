const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
  const products = productService.getProducts();
  res.status(200).json(products);
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
};
