var sound = [];

sound[1] = new Audio('audio/kick-1.wav');
sound[2] = new Audio('audio/kick-2.wav');
sound[3] = new Audio('audio/kick-3.wav');
sound[4] = new Audio('audio/kick-4.wav');
sound[5] = new Audio('audio/snare-1.wav');
sound[6] = new Audio('audio/snare-2.wav');
sound[7] = new Audio('audio/snare-3.wav');
sound[8] = new Audio('audio/snare-4.wav');
sound[9] = new Audio('audio/hat-1.wav');
sound[10] = new Audio('audio/hat-2.wav');
sound[11] = new Audio('audio/hat-3.wav');
sound[12] = new Audio('audio/hat-4.wav');
sound[13] = new Audio('audio/clap-1.wav');
sound[14] = new Audio('audio/clap-2.wav');
sound[15] = new Audio('audio/clap-3.wav');
sound[16] = new Audio('audio/clap-4.wav');

var button = [];

for (i = 1; i <= 16; i++) {
	button[i] = document.getElementById('drum-' + i);
	button[i].addEventListener('click', function() { 
		sound[i].play();
	});
}

var buttons = document.querySelectorAll('.button');

document.body.addEventListener('keydown', (e) => {
	var code = e.code.toString();
	console.log(code);
	switch(code) {
		case 'Digit2':
			button[1].classList.add('play');
			sound[1].play();
			setTimeout(
				function() {
				button[1].classList.remove('play');
			}, 200);
			break;
		case 'Digit3': 
			button[2].classList.add('play');
			sound[2].play();
			setTimeout(
				function() {
				button[2].classList.remove('play');
			}, 200);
			break;
		case 'Digit4': 
			button[3].classList.add('play');
			sound[3].play();
			setTimeout(
				function() {
				button[3].classList.remove('play');
			}, 200);
			break;
		case 'Digit5': 
			button[4].classList.add('play');
			sound[4].play();
			setTimeout(
				function() {
				button[4].classList.remove('play');
			}, 200);
			break;
		case 'KeyQ': 
			button[5].classList.add('play');
			sound[5].play();
			setTimeout(
				function() {
				button[5].classList.remove('play');
			}, 200);
			break;
		case 'KeyW': 
			button[6].classList.add('play');
			sound[6].play();
			setTimeout(
				function() {
				button[6].classList.remove('play');
			}, 200);
			break;
		case 'KeyE': 
			button[7].classList.add('play');
			sound[7].play();
			setTimeout(
				function() {
				button[7].classList.remove('play');
			}, 200);
			break;
		case 'KeyR': 
			button[8].classList.add('play');
			sound[8].play();
			setTimeout(
				function() {
				button[8].classList.remove('play');
			}, 200);
			break;
		case 'KeyS': 
			button[9].classList.add('play');
			sound[9].play();
			setTimeout(
				function() {
				button[9].classList.remove('play');
			}, 200);
			break;
		case 'KeyD': 
			button[10].classList.add('play');
			sound[10].play();
			setTimeout(
				function() {
				button[10].classList.remove('play');
			}, 200);
			break;
		case 'KeyF': 
			button[11].classList.add('play');
			sound[11].play();
			setTimeout(
				function() {
				button[11].classList.remove('play');
			}, 200);
			break;
		case 'KeyG': 
			button[12].classList.add('play');
			sound[12].play();
			setTimeout(
				function() {
				button[12].classList.remove('play');
			}, 200);
			break;
		case 'KeyZ':
			button[13].classList.add('play');
			sound[13].play();
			setTimeout(
				function() {
				button[13].classList.remove('play');
			}, 200);
			break;
		case 'KeyX': 
			button[14].classList.add('play');
			sound[14].play();
			setTimeout(
				function() {
				button[14].classList.remove('play');
			}, 200);
			break;
		case 'KeyC': 
			button[15].classList.add('play');
			sound[15].play();
			setTimeout(
				function() {
				button[15].classList.remove('play');
			}, 200);
			break;
		case 'KeyV': 
			button[16].classList.add('play');
			sound[16].play();
			setTimeout(
				function() {
				button[16].classList.remove('play');
			}, 200);
			break;
	}
});

buttons.forEach((but)=> {
    but.addEventListener('click', (e) => {
		e.preventDefault();
		var soundName = e.target.dataset.key;
		var playAudio = new Audio('audio/' + soundName);
		playAudio.play();
		but.classList.add('play');
		setTimeout(
			function() {
				but.classList.remove('play');
		}, 200);
	});
});				



