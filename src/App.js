import "./App.css";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  toast.configure();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    if (firstName == "" || lastName == "" || number == "") {
      toast.error("Please fill all the fields ");
    } else {
      console.log(firstName);
      setUser((prev) => [
        ...prev,
        { firstName: firstName, lastName: lastName, number: number },
      ]);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        container
        spacing={1}
        direction="column"
        style={{
          minHeight: "50vh",
          backgroundColor: "#EEEEEE",
          maxWidth: "50vh",
          borderWidth: "1px",
          borderRadius: 20,
          padding: "30px",
          margin: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Typography color="#222831" variant="h4">
              Contact Form
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Search
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </FormControl>
          </Grid>
        </Grid>

        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          inputProps={{
            autoComplete: "off",
          }}
          required
        />
        <TextField
          id="LastName"
          label="Last Name"
          variant="outlined"
          margin="normal"
          required
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          inputProps={{
            autoComplete: "off",
          }}
        />
        <TextField
          id="number"
          label="Phone Number"
          variant="outlined"
          margin="normal"
          required
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          inputProps={{
            autoComplete: "off",
          }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ alignSelf: "end" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
        {user.length > 0 && (
          <TableContainer component={Paper} sx={{ marginTop: "5vh" }}>
            <Table sx={{ minWidth: "10vh" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user
                  .filter((val) => {
                    if (search == "") {
                      return val;
                    } else if (
                      val.firstName.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell>{row.lastName}</TableCell>
                      <TableCell>{row.number}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {/*  {JSON.stringify(user)} */}
      </Grid>
    </Box>
  );
}

export default App;
