import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'urql';

import logo from './logo.svg';
import './App.css';

const Query = gql`
  query Query {
    test
  }
`;

const App = () => {
  const [result] = useQuery({ query: Query });

  console.log('GraphQL result', result);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
