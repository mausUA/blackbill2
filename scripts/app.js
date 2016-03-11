(function () {
var app = angularModule('bbill',[]);

    app.controller('picCtrl', function () {
 this.gallery = gal_content;
});
var gal_content = [
    {type: 'building',
    pic: 'pics/ch1.jpg',
    name: 'Reactor',
    desc: 'Crazy construction'},
    {type: 'landscape',
    pic: 'pics/ch2.jpg',
    name: 'Overview',
    desc: 'View on reactor'},
    {type: 'interior',
        pic: 'ch5.jpg',
        name: 'Controller',
        desc: 'Soviet remote control :)'
            }
]

});