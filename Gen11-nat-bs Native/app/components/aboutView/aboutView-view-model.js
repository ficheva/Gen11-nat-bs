'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

var helper = require('../../utils/widgets/helper');
// additional requires

ViewModel = new Observable({

    pageTitle: 'About with icon',

    contactUrl: 'mailto:support@example.com',

    facebookUrl: 'https://www.facebook.com/Telerik',

    twitterUrl: 'https://twitter.com/telerik',

    onContactTap: function() {
        helper.onOpenUrl(this.contactUrl);
    },

    onFacebookTap: function() {
        helper.onOpenUrl(this.facebookUrl);
    },

    onTwitterTap: function() {
        helper.onOpenUrl(this.twitterUrl);
    }

    // additional properties

});

// START_CUSTOM_CODE_aboutView
// END_CUSTOM_CODE_aboutView
module.exports = ViewModel;