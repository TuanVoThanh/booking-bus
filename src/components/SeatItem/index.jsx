import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import "./style.css";

class SeatItem extends Component {
  render() {
    const { item } = this.props;
    return <Button className="btnSeat">{item.SoGhe}</Button>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // Thêm sản phẩm
    seatAdded: (seat) => {
      const seatItem = {
        SoGhe: seat.SoGhe,
        TenGhe: seat.TenGhe,
        Gia: seat.Gia,
        TrangThai: seat.TrangThai,
      }

      const action = {
        type: 'SEAT_ADDED',
        seatItem, 
      }

      dispatch(action)
    },
  };
};

export default connect(null, mapDispatchToProps)(SeatItem);
