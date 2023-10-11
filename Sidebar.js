
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <List>
      <ListItem button component={Link} to="/properties">
        <ListItemText primary="Propriedades" />
      </ListItem>
      <ListItem button component={Link} to="/rentals">
        <ListItemText primary="Aluguéis" />
      </ListItem>
    </List>
  );
}

export default Sidebar;
