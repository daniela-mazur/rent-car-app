import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
