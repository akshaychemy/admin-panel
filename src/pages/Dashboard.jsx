// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <ProductForm addProduct={addProduct} />
        <ProductTable products={products} deleteProduct={deleteProduct} />
      </Box>
    </Container>
  );
};

export default Dashboard;
