import Product from '../models/Product.js';

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, stock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      image,
      stock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get Single Product by ID
  export const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update Product
  export const updateProduct = async (req, res) => {
    try {
      const { name, description, price, image, stock } = req.body;
  
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.image = image || product.image;
      product.stock = stock || product.stock;
  
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  