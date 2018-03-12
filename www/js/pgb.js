function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function alertDismissed() {
    navigator.notification.beep(1);
}

function deviceInfo() {

    info =  'Device Name    : '     + device.name     + '\n' + 
            'Device Cordova : '  + device.cordova   + '\n' + 
            'Device Platform: ' + device.platform   + '\n' + 
            'Device UUID    : '     + device.uuid     + '\n' + 
            'Device Model   : '    + device.model     + '\n' + 
            'Device Version : '  + device.version   + '\n';

    navigator.notification.alert('\n' + info, alertDismissed, 'Hi, I am your smartphone :)', 'Good!');
    
}

function businessCard() {
    info =  'Name  : Agnieszka Tuleta'                    + '\n' + 
            'E-mail : agnieszka.t1994@gmail.com'          + '\n' + 
            'Field of study : Informatyka Stosowana'      + '\n' +
            'Deans group number : 209898'          + '\n'; 

navigator.notification.alert('\n'+info, alertDismissed, 'About me', 'Good!');
}


function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    navigator.notification.alert('Connection type: ' + states[networkState], 'Check connection', 'Network!');
}

function motion() {
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

function contactlist () {
}

var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: ''  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }

};
