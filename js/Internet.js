$(document).ready(function() {
	var his = $('#button1');
	var dev = $('#button2');
	var tec = $('#button3');

	var content1 = $('#content1');
	var content2 = $('#content2');
	var content3 = $('#content3');

	var b1 = $('#b1');
	var b2 = $('#b2');
	var b3 = $('#b3');

	his.click(function() {
		content1.css('display','block');
		content2.css('display','none');
		content3.css('display','none');
		b1.css({
			'background':'url("../images/button2.png") no-repeat',
			'background-size':'cover'
		});
		b2.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
		b3.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
	});

	dev.click(function() {
		content1.css('display','none');
		content2.css('display','block');
		content3.css('display','none');
		b1.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
		b2.css({
			'background':'url("../images/button2.png") no-repeat',
			'background-size':'cover'
		});
		b3.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
	});

	tec.click(function() {
		content1.css('display','none');
		content2.css('display','none');
		content3.css('display','block');
		b1.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
		b2.css({
			'background':'url("../images/button.png") no-repeat',
			'background-size':'cover'
		});
		b3.css({
			'background':'url("../images/button2.png") no-repeat',
			'background-size':'cover'
		});
	});
});