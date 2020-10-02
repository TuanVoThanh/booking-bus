import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import BookedSeatList from "./containers/BookedSeatList";
import SeatList from "./containers/SeatList";

function App({ seats }) {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container>
          <Grid item={true} sm={12} style={{ padding: 40 }}>
            <Typography
              style={{ color: "orange", margin: 0 }}
              align="center"
              variant="h3"
            >
              ĐẶT VÉ XE BUS HÃNG CYBERSOFT
            </Typography>
          </Grid>

          <Grid container>
            <Grid
              container
              sm={6}
              style={{
                backgroundColor: "#f2f2f2",
                padding: "20px",
                alignContent: "start",
                height: "fit-content",
                justifyContent: "center",
              }}
            >
              <Grid
                item={true}
                sm={12}
                style={{
                  backgroundColor: "lightgray",
                  height: "fit-content",
                  padding: "10px 0",
                  borderRadius: "4px",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <Typography align="center" variant="h5">
                  Tài Xế
                </Typography>
              </Grid>

              <Grid container sm={12} spacing={3}>
                {/* SEAT LIST*/}
                <SeatList />
              </Grid>
            </Grid>
            <Grid
              container
              sm={6}
              style={{ padding: "20px", alignContent: "start" }}
            >
              <Grid
                item={true}
                sm={12}
                style={{
                  height: "fit-content",
                  padding: "10px 0",
                  borderRadius: "4px",
                  width: "100%",
                  marginBottom: "20px",
                  color: "darkorange",
                }}
              >
                <Typography variant="h5">DANH SÁCH GHẾ ĐÃ ĐẶT</Typography>
              </Grid>
              <List>
                {/* BOOKED SEAT LIST */}
                <BookedSeatList />
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  // console.log("state:", state); //clg
  return {
    seats: state,
  };
};

export default connect(mapStateToProps)(App);
