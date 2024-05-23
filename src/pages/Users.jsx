// src/pages/Users.jsx
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <UserForm addUser={addUser} />
        <UserTable users={users} deleteUser={deleteUser} />
      </Box>
    </Container>
  );
};

export default Users;
