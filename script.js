angular.module('myApp', ['ngMaterial'])
    .controller('MainCtrl', function () {
        //var imagePath = 'assets/images/angular-logo.svg'
        var imagePath = 'http://www.noao.edu/image_gallery/images/d2/ngc2237_200.jpg'

        this.items = [
            {
                label: 'Item One',
                description: 'This is the first item',
                price: '100',
                url: 'http://angularjs.org',
                avatar: imagePath
            },
            {
                label: 'Item Two',
                description: 'I\'m the second item',
                price: '200',
                url: 'http://angularjs.org',
                avatar: imagePath
            },
            {
                label: 'Item Three',
                description: 'This is the last item',
                price: '300',
                url: 'http://angularjs.org',
                avatar: imagePath
            }
        ]
    });
