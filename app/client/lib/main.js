/**
 * Created by mazi on 1/7/16.
 */
Meteor.startup(function () {
    if (Meteor.isCordova) {
        document.addEventListener('deviceready', onDeviceReady(), false);
        console.log("is Cordova");

    }
});

function onDeviceReady() {

    console.log("On device ready");
    //3d Touch for iOS
    ThreeDeeTouch.onHomeIconPressed = function (payload) {
        console.log("Icon pressed. Type: " + payload.type + ". Title: " + payload.title + ".");
        swal("Home Icon Pressed: " + payload.title);
    }

    setQuickActionMenu();
}

setQuickActionMenu = function () {

    ThreeDeeTouch.configureQuickActions([
        {
            type: 'a', // optional, but can be used in the onHomeIconPressed callback
            title: 'Get a quote', // mandatory
            iconType: 'Search' // optional
        },
        {
            type: 'b',
            title: 'View Profile',
            subtitle: 'Open user profile',
            iconType: 'Home' // optional, case insensitive
        },
        {
            type: 'c',
            title: 'Contact Us',
            iconType: 'Mail' // optional, case insensitive
        }
    ]);

}