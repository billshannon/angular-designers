angular.module('myApp', ['ngMaterial', 'ngMessages'])
    .controller('MainCtrl', function () {
        //var imagePath = 'assets/images/angular-logo.svg'
        var imagePath = 'http://www.noao.edu/image_gallery/images/d2/ngc2237_200.jpg';

        this.setCurrentItem = function (item) {
            this.currentItem = item;
        };

        this.submitItem = function (item) {
            this.submittedMessage = 'Success! ' + item.label + ' was submmited!';
        };

        this.discount = 0;
        this.showDiscount = function() {
            this.discount++;
            this.discountMessage = 'Hooray! Your discount is ' + this.discount + '%'
        };

        this.removeDiscount = function () {
            this.discountMessage = null
        };



        this.items = [{
            id: 1,
            label: 'Item One',
            description: 'This is the first item',
            price: 100,
            url: 'http://angularjs.org',
            avatar: imagePath
        },
            {
                id: 2,
                label: 'Item Two',
                description: 'I\'m the second item',
                price: 200,
                url: 'http://angularjs.org',
                avatar: imagePath
            },
            {
                id: 3,
                label: 'Item Three',
                description: 'This is the last item',
                price: 300,
                url: 'http://angularjs.org',
                avatar: imagePath
            }]
    });
