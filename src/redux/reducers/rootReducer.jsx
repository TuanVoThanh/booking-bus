import { combineReducers } from "redux";
import { seatsDataReducer } from "./seatsDataReducer";

/* Store tổng ứng dụng */
export const rootReducer = combineReducers({
  // Nơi chứa các reducer cho nghiệp vụ (store con)
  seatsDataReducer,
});
