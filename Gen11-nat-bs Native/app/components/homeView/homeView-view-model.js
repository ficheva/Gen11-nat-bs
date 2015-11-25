'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Home View',
    // additional properties
});

// START_CUSTOM_CODE_homeView
// END_CUSTOM_CODE_homeView
module.exports = ViewModel;