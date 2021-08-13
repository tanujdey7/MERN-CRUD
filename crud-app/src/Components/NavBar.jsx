import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "black",
  },
  tabs: {
    color: "white",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});
const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="./">
          Tanuj Dey
        </NavLink>
        <NavLink className={classes.tabs} to="all">
          All Users
        </NavLink>
        <NavLink className={classes.tabs} to="add">
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
