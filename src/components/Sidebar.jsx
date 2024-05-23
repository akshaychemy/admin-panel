// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Dashboard, People, ShoppingCart } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
