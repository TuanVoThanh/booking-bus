import React from 'react';
import { connect } from "react-redux";
import SeatItem from '../components/SeatItem';

const SeatList = ({ seats }) => {
  return seats.map((seat, index) => {
    return (
      <SeatItem seat={seat} key={index} />
      
    );
  });
};

const mapStateToProps = state => {
  // console.log(state); //clg
    return ({
        seats: state
    })
}

export default connect(mapStateToProps)(SeatList);