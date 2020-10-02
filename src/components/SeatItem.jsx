import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { addSeat } from "./../actions/index";


const SeatItem = ({ seat, onAddSeat }) => {

  const useStyles = makeStyles({
    btnSeatItem: {
      width: "-webkit-fill-available",
      padding: "10px",
      backgroundColor: seat.TrangThai ? 'green' : '',
      "&:hover": {
        backgroundColor: "green",
      },
    },
  });

  const classes = useStyles();
  return (
    <Grid
      item
      sm={3}
      style={{
        height: "fit-content",
      }}
    >
      <Button
        onClick={() => onAddSeat(seat)}
        className={classes.btnSeatItem}
        size="large"
        variant="contained"
      >
        {seat.SoGhe}
      </Button>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSeat: (seat) => {
      dispatch(addSeat(seat));
    },
  };
};

export default connect(null, mapDispatchToProps)(SeatItem);
