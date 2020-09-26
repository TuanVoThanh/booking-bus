import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import BookingBus from "./screens/BookingBus";

/* Setup redux */
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BookingBus />
  </Provider>,
  document.getElementById("root")
);
