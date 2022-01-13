import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import LibraryContainer from './components/LibraryContainer';
import { HashRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <div className='outer-container'>
      <div className='inner-container'>
        <Router>
          <LibraryContainer />
        </Router>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  LibraryContainer
    - Header
    - SearchContainer
    - ResultsContainer
    - - ResultItem
    - BookshelfContainer
    - - BookItem
*/