'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./dataListView-service'),
    // additional requires

    viewModel = require('./dataListView-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get("listItems")[args.index];

    helpers.navigate({
        moduleName: "components/dataListView/itemDetails/itemDetails",
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

function flattenLocationProperties(dataItem) {
    var propName, propValue,
        isLocation = function(value) {
            return propValue && typeof propValue === 'object' &&
                propValue.longitude && propValue.latitude;
        };

    for (propName in dataItem) {
        if (dataItem.hasOwnProperty(propName)) {
            propValue = dataItem[propName];
            if (isLocation(propValue)) {
                dataItem[propName] =
                    'Latitude: ' + propValue.latitude +
                    'Longitude: ' + propValue.longitude;
            }
        }
    }
}
// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    viewModel.set('isLoading', true);

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {

                flattenLocationProperties(item);

                itemsList.push({

                    icon: '~/images/icons/globe.png',

                    image: item.Picture,

                    header: item.Text,

                    description: item.UserId,

                    details: {

                        image: item.Picture,

                        subheader: item.UserId,

                        description: item.Text,

                    }

                });
            });

            viewModel.set('listItems', itemsList);
            viewModel.set('isLoading', false);
        })
        .catch(function onCatch() {
            viewModel.set('isLoading', false);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_dataListView
// END_CUSTOM_CODE_dataListView
exports.pageLoaded = pageLoaded;