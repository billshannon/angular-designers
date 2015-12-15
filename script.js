angular.module('myApp', ['ngMaterial', 'ngMessages'])
    .controller('OptionsCtrl', function () {
        this.options = [
            {label: 'Option 01', value: 1},
            {label: 'Option 02', value: 2},
            {label: 'Option 03', value: 3},
        ];

    })

    .controller('MainCtrl', function () {
        //var imagePath = 'assets/images/angular-logo.svg'
        var imagePath = 'http://www.noao.edu/image_gallery/images/d2/ngc2237_200.jpg';

        this.setCurrentItem = function (item) {
            this.currentItem = item;
        };

        this.submitItem = function (item) {
            this.submittedMessage = 'Success! ' + item.label + ' was submmited!';
        }

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
