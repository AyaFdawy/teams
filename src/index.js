import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
ReactDom.render(<App/>,document.getElementById('root'));