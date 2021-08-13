import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  table: {
    margin: "50px 0 0 50px",
    width: "90%",
  },
  thead: {
    "&>*": {
      background: "black",
      color: "white",
      fontSize: 20,
    },
  },
  row: {
    "&>*": {
      fontSize: 20,
    },
  },
});
const AllUsers = () => {
  const classes = useStyle();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllUsers;
