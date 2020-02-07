import React from "react";
import ReactDOM from "react-dom";
import { Provider, createClient } from "urql";

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
    },
    {
      url: /graphql/,
      method: 'GRAPHQL',
      operations: [{
        operationName: 'Query',
        type: 'query',
        response: { data: { test: 'test' } }
      }],
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

const client = createClient({ url: 'http://example.com/graphql' });

ReactDOM.render(<Provider value={client}><App /></Provider>, document.getElementById("root"));
