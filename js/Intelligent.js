$(document).ready(function() {
	var pro = $('#button1');
	var app = $('#button2');
	var hot = $('#button3');

	var content1 = $('#content1');
	var content2 = $('#content2');
	var content3 = $('#content3');

	console.log(content1);

	pro.click(function() {
		content1.css('display','block');
		content2.css('display','none');
		content3.css('display','none');
		pro.css('marginLeft','95px');
		app.css('marginLeft','80px');
		hot.css('marginLeft','80px');
	});

	app.click(function() {
		content1.css('display','none');
		content2.css('display','block');
		content3.css('display','none');
		pro.css('marginLeft','80px');
		app.css('marginLeft','95px');
		hot.css('marginLeft','80px');
	});

	hot.click(function() {
		content1.css('display','none');
		content2.css('display','none');
		content3.css('display','block');
		pro.css('marginLeft','80px');
		app.css('marginLeft','80px');
		hot.css('marginLeft','95px');
	});
});