import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CancelIcon from "@material-ui/icons/Cancel";
import { connect } from "react-redux";

class BookedSeatList extends Component {
  state = {};
  render() {
    const { seatsData } = this.props;
    return seatsData.map((item) => {
      if (item.TrangThai === true)
        return (
          <Row
            key={item.SoGhe}
            style={{
              marginLeft: 20,
              padding: "20px 20px 20px 0",
              borderBottom: "1px solid lightgrey",
            }}
          >
            <Col sm={3} style={{ borderRight: "1px solid lightgrey" }}>
              Ghế:
            </Col>
            <Col sm={3} style={{ borderRight: "1px solid lightgrey" }}>
              {item.SoGhe}
            </Col>
            <Col sm={3} style={{ borderRight: "1px solid lightgrey" }}>
              ${item.SoGhe}
            </Col>
            <Col sm={3} style={{ textAlign: "right" }}>
              <CancelIcon style={{ cursor: "pointer", color: "red" }} />
            </Col>
          </Row>
        );
      });
  }
}

const mapStateToProps = (state) => {
  return {
    seatsData: state.seatsDataReducer.seatsData,
  };
};

export default connect(mapStateToProps)(BookedSeatList);
