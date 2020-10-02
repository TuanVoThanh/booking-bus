import { ListItem, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const BookedSeatList = ({ seats }) => {
  return seats.map((seat, index) => {
    if (seat.TrangThai)
      return (
        <ListItem key={index}>
          <Typography variant="body1">
            Ghế: &ensp; số {seat.SoGhe} &emsp;|&emsp; ${seat.Gia}
          </Typography>
        </ListItem>
      );
  });
};

const mapStateToProps = (state) => {
  return {
    seats: state,
  };
};
export default connect(mapStateToProps)(BookedSeatList);
