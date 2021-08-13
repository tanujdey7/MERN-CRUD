import { makeStyles } from "@material-ui/core";
import notFound from "../Assets/Images/404.jpg";
const useStyle = makeStyles({
  img: {
    margin: "80px 0 0 30%",
    width: "40%",
  },
});

const NotFound = () => {
  const classes = useStyle();
  return <img className={classes.img} src={notFound} />;
};
export default NotFound;
