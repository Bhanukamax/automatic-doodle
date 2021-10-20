import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ProductListPage from "./product-listing-module/product-list";

ReactDOM.render(
  <React.StrictMode>
    <ProductListPage />
  </React.StrictMode>,
  document.getElementById("root")
);
