declare var jQuery: any;
declare var $: any;

import '../scss/libs.scss';
import '../scss/style.scss';

import 'bootstrap-sass/assets/javascripts/bootstrap.js';

import * as carousel from "./include/carousel";

carousel.test('With optional argument');

;(function($){
  
})(jQuery);

// TURN OFF REACT FOR NOW
// import React from 'react';
// import ReactDOM from 'react-dom'; 

// ReactDOM.render(
// <h1>Hello, from React.js!</h1>,
// document.getElementById('root') 
// );
