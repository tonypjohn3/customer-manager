﻿require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0'
});

require(
    [
        'animations/listAnimations',
        'app',
        'directives/unique',
        'directives/overlay',
        'services/routeResolver',
        'services/config',
        'services/customersBreezeService',
        'services/customersService',
        'services/dataService',
        'services/dialogService',
        'filters/nameCityStateFilter',
        'controllers/navbarController',
        'controllers/orders/orderChildController'
    ],
    function () {
        angular.bootstrap(document, ['customersApp']);
    });
