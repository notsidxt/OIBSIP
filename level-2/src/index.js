import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Calculator from './Calculator.js';
import Tribute from './Tribute.js';
import Todo from './Todo.js'
import Home from './Home.js'
import List from './List.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/tribute" element={<Tribute />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
