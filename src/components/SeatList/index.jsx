import React, { Component } from "react";
import { connect } from "react-redux";
import SeatItem from "../SeatItem";

/* Import Bootstrap Components */
import Col from "react-bootstrap/Col";

class SeatList extends Component {
  state = {};
  render() {
    const { seatsData } = this.props;
    return seatsData.map((item) => {
      return (
        <Col key={item.SoGhe} xs={6} sm={3}>
          <SeatItem item={item} />
        </Col>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    seatsData: state.seatsDataReducer.seatsData,
  };
};

export default connect(mapStateToProps)(SeatList);
