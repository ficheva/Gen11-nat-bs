'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    gestures = require("ui/gestures"),
    // additional requires

    viewModel = require('./formView-view-model');

function onformViewModelFormSubmit() {}

function onformViewModelFormCancel() {
    helpers.back();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.formViewModelSubmit, onformViewModelFormSubmit);

        viewModel.on(viewModel.events.formViewModelCancel, onformViewModelFormCancel);

        // additional pageInit

    }
}

// START_CUSTOM_CODE_formView
// END_CUSTOM_CODE_formView
exports.pageLoaded = pageLoaded;