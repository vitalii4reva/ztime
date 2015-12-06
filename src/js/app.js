var sec = 1000;
var min = sec * 60;
var hour = min * 60;

var tick = function tick(){
		setInterval( function () {
			console.log('tick');
			
		}, sec );
};


var app = function app () {
	console.log('app is started');
	
	tick();		
};

window.addEventListener('load', app);