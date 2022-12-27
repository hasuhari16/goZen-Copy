import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';

const goZen = (
  <Router>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
    </Routes>
  </Router>
);



ReactDOM.render(goZen,document.getElementById('root'));