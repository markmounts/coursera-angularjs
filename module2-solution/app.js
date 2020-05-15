(function () {
    'use strict';

    angular.module(ShoppingListCheckOff, [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

    }

    function ShoppingListCheckOffService() {
        var items = [
            { 
                name: "cookies", 
                quantity: 5 
            },
            {
                name: "oranges",
                quantity: 3
            },
            {
                name: "chips",
                quantity: 2
            },
            {
                name: "milk",
                quantity: 4
            },
            {
                name: "soda",
                quantity: 7
            }
        ];
        var purchased = [];
    }

})();