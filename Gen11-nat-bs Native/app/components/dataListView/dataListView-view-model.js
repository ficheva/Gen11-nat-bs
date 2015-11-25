'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Data List',

    isLoading: false,
    listItems: [],
    // additional properties

});

// START_CUSTOM_CODE_dataListView
// END_CUSTOM_CODE_dataListView
module.exports = ViewModel;