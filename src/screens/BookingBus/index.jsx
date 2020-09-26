import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import SeatList from "../../components/SeatList";
import BookedSeatList from "../../components/BookedSeatList";

class BookingBus extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="heading3">
          <strong>ĐẶT VÉ XE BUS HÃNG CYBERSOFT</strong>
        </h3>
        <Container>
          <Row>
            {/* LEFT SIDE */}
            <Col sm={6}>
              {/* Tài Xế */}
              <Row>
                <Col className="colHeader">
                  <h5 className="heading5">Tài Xế</h5>
                </Col>
              </Row>
              {/* Ghế Ngồi */}
              <Row className="rowData">
                <SeatList />
              </Row>
            </Col>
            {/* RIGHT SIDE*/}
            <Col sm={6}>
              <Row>
                <Col className="colBookedSeat">
                  <h5 className="heading5">Danh Sách Ghế Đã Đặt (5)</h5>
                  {/* Booked Seat List */}
                  <BookedSeatList />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default BookingBus;
