import React, { Component } from 'react';


// let res = function res() {
//   let x = 0;
//   setInterval( () => console.log('tick', x+=1) , 1000);
// };
//
// res();

var obj = {
  f: function func(parameter) {
      console.log('parameter: ', parameter);
  }
};

obj.f('ererer');

var newObj = new obj();

newObj.f('NENENE');
