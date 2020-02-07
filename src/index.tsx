import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { injectMocks, extractScenarioFromLocation } from "./data-mocks/mocks";
import { Scenarios } from "./data-mocks/types";

const mocks: Scenarios = {
  default: [
    {
      url: /test/,
      response: {
        yeah: "buddy"
      },
      method: "GET",
      delay: 600,
      responseCode: 200
    }
  ]
};

injectMocks(mocks, extractScenarioFromLocation(window.location));

fetch("http://example.com/test")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
  });

ReactDOM.render(<App />, document.getElementById("root"));
