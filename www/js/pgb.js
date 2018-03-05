function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function author(){
	info = 'Agnieszka Tuleta';
	
	navigator.notification.alert(info);
}

function businessCard() {
	info = 'Name                  : Agnieszka Tuleta' + '\n' + 
		   'Email                 : agnieszka.t1994@gmail.com ' + '\n' +
		   'Deans group number    : 209898 ' + '\n' + 
		   'Field of study        : Informatyka Stosowana' + '\n' + 		   
		   
		  
	
	navigator.notification.alert(info);
}