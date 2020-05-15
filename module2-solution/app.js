(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buyItems = this;
        buyItems.items = ShoppingListCheckOffService.getItems();
        buyItems.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtItems = this;
        boughtItems.items = ShoppingListCheckOffService.getpurchasedItems();
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
        var service = this;

        service.getItems = function () {
            return items;
        };

        service.getpurchasedItems = function () {
            return purchased;
        };

        service.removeItem = function (itemIndex) {
            purchased.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };
    }

})();