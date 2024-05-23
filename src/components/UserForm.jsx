// src/components/UserForm.jsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({ id: '', name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ id: '', name: '', email: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <Typography variant="h6">Add New User</Typography>
      <TextField label="ID" name="id" value={user.id} onChange={handleChange} required />
      <TextField label="Name" name="name" value={user.name} onChange={handleChange} required />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} required />
      <Button type="submit" variant="contained">Add User</Button>
    </Box>
  );
};

export default UserForm;
