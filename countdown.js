var digitSegments = [
	[1, 2, 3, 4, 5, 6],
	[2, 3],
	[1, 2, 7, 5, 4],
	[1, 2, 7, 3, 4],
	[6, 7, 2, 3],
	[1, 6, 7, 3, 4],
	[1, 6, 5, 4, 3, 7],
	[1, 2, 3],
	[1, 2, 3, 4, 5, 6, 7],
	[1, 2, 7, 3, 6]
];
var countDownDate = new Date("Oct 21, 2019 17:00:00").getTime();

document.addEventListener('DOMContentLoaded', function () {
	var _days = document.querySelectorAll('.days'),
		_hours = document.querySelectorAll('.hours'),
		_minutes = document.querySelectorAll('.minutes'),
		_seconds = document.querySelectorAll('.seconds');

	setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setNumber(_days[0], Math.floor(days / 10), 1);
		setNumber(_days[1], days % 10, 1);

		setNumber(_hours[0], Math.floor(hours / 10), 1);
		setNumber(_hours[1], hours % 10, 1);

		setNumber(_minutes[0], Math.floor(minutes / 10), 1);
		setNumber(_minutes[1], minutes % 10, 1);

		setNumber(_seconds[0], Math.floor(seconds / 10), 1);
		setNumber(_seconds[1], seconds % 10, 1);
	}, 1000);
});

var setNumber = function (digit, number, on) {
	var segments = digit.querySelectorAll('.segment');
	var current = parseInt(digit.getAttribute('data-value'));

	// only switch if number has changed or wasn't set
	if (!isNaN(current) && current != number) {
		// unset previous number
		digitSegments[current].forEach(function (digitSegment, index) {
			setTimeout(function () {
				segments[digitSegment - 1].classList.remove('on');
			}, index * 45)
		});
	}

	if (isNaN(current) || current != number) {
		// set new number after
		setTimeout(function () {
			digitSegments[number].forEach(function (digitSegment, index) {
				setTimeout(function () {
					segments[digitSegment - 1].classList.add('on');
				}, index * 45)
			});
		}, 250);
		digit.setAttribute('data-value', number);
	}
};