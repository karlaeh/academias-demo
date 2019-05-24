import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const SimpleNavBar = () => {
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <AppBar position="static">
      <Toolbar className="EstiloBarra">
        <IconButton className="link-container">
          <NavLink exact to="/" className="link"  activeClassName="selected"><HomeIcon /></NavLink>
        </IconButton>
        <IconButton className="link-container">
          <NavLink to="/text" className="link" activeClassName="selected">text</NavLink>
        </IconButton>
        <IconButton className="link-container">
          <NavLink to="/form" className="link" activeClassName="selected">form</NavLink>
        </IconButton>
        <IconButton className="link-container" id="user-link">
          <NavLink to="/user" className="link" activeClassName="selected">user</NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>  
  )
}

export default SimpleNavBar
