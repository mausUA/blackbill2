(function () {
    "use strict";

    var app = angular.module('MyApp', []);

    app.controller('picControl', function () {
        this.gall =  [
            {type: 'building',
                pic: 'pics/ch1.jpg',
                name: 'Reactor',
                desc: 'Crazy construction'},
            {type: 'landscape',
                pic: 'pics/ch2.jpg',
                name: 'Overview',
                desc: 'View on reactor'},
            {type: 'interior',
                pic: 'pics/ch5.jpg',
                name: 'Controller',
                desc: 'Soviet remote control :)'
            }];
    });
})();




