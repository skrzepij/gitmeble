declare const jQuery: any;
declare const $: any;

import '../scss/libs.scss';
import '../scss/style.scss';

import 'bootstrap-sass/assets/javascripts/bootstrap.js';

import * as carousel from "./include/carousel";

carousel.test('With optional argument');

var string: string = "foo";
var substring: string = "oo";
var dupa: boolean = string.includes(substring);

// document.write('porownanie stringow - ' + dupa);


;(function($){
  
  // let $allInputs = $('input');
  //
  // let cDiv = document.createElement('div');
  // cDiv.className = "cDiv multi-class";
  // cDiv.id = "cDiv";
  // document.body.appendChild(cDiv);
  //
  //
  // $allInputs.on('click change' , function(){
  //   let $form = $('#form').serialize();
  //
  //   // $('body').append($form);
  //   cDiv.innerText = $form;
  // })
  
})(jQuery);

// TURN OFF REACT FOR NOW
// import React from 'react';
// import ReactDOM from 'react-dom'; 

// ReactDOM.render(
// <h1>Hello, from React.js!</h1>,
// document.getElementById('root') 
// );
