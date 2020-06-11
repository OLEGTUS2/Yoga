// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {



    'use strict';
    let calc = require('./parts/calc'),
        forms = require('./parts/forms'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');


    calc();
    forms();
    modal();
    slider();
    tabs();
    timer();

});
