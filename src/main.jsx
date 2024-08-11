import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Provider>
);
