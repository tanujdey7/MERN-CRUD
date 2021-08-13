import LinkedIn from "../Assets/Images/linkedin.png";
import Insta from "../Assets/Images/insta.png";
import { makeStyles, Typography, Box } from "@material-ui/core";
const useStyles = makeStyles({
  img: {
    width: "50%",
    height: "50%",
    marginTop: 30,
  },
  component: {
    margin: 50,
  },
});
const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Typography variant="h4">Tanuj Dey</Typography>
      <Box style={{ display: "flex" }}>
        <img src={LinkedIn} className={classes.img} />
        <img src={Insta} className={classes.img} />
      </Box>
    </Box>
  );
};
export default Main;
