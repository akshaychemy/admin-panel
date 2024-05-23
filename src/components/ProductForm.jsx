// src/components/ProductForm.jsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({ id: '', name: '', price: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ id: '', name: '', price: '', description: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <Typography variant="h6">Add New Product</Typography>
      <TextField label="ID" name="id" value={product.id} onChange={handleChange} required />
      <TextField label="Name" name="name" value={product.name} onChange={handleChange} required />
      <TextField label="Price" name="price" value={product.price} onChange={handleChange} required />
      <TextField label="Description" name="description" value={product.description} onChange={handleChange} required />
      <Button type="submit" variant="contained">Add Product</Button>
    </Box>
  );
};

export default ProductForm;
