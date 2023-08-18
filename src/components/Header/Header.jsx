import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './Header.scss';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <IconButton edge="start" color="inherit" aria-label="home">
          <HomeIcon />
        </IconButton>
        <div className="navbar">
        <Button color="inherit">About Me</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
