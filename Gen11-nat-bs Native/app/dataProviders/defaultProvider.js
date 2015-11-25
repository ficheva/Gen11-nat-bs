var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//platform.telerik.com/bs-api/v1/',

    apiKey: '1OEkt5Nwsb8ghUGe',
    scheme: 'https'
});

// START_CUSTOM_CODE_defaultProvider
// END_CUSTOM_CODE_defaultProvider
module.exports = provider;