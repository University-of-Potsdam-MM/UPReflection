
var Appointments = new AppointmentCollection();
var Questions = new QuestionContainerList();
var Config = new Configuration({id: 1});

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    onDeviceOffline: function(){
        app.receivedEvent('onDeviceOffline');
        alert('Please check your internet connection and restart!');
        navigator.app.exitApp();
    },

    onDeviceOnline: function(){
        app.receivedEvent('onDeviceOnline');
        //PushServiceRegister();
        // hide splashscreen
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);

        var router = new Router();
        Backbone.history.start();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        //document.addEventListener("offline", app.onDeviceOffline(), false);
        //document.addEventListener("online", app.onDeviceOnline(), false);

        if((navigator.network.connection.type).toUpperCase() != "NONE" && (navigator.network.connection.type).toUpperCase() != "UNKNOWN") {
            app.onDeviceOnline();
        }else{
            app.onDeviceOffline();
        }

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};