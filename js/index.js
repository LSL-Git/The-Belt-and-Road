// index
$(document).ready(function() {
	var IImg = $('#content-img');
	$('.inte,#inte').mouseover(function() {
		IImg.attr('src','../images/content1.png');
	});

	$('.interconn,#interconn').mouseover(function() {
		IImg.attr('src','../images/content2.png');
	});

	$('.num,#num').mouseover(function() {
		IImg.attr('src','../images/content3.png');
	});

	$('.block-chain,#block-chain').mouseover(function() {
		IImg.attr('src','../images/content4.png');
	});
});

$(document).ready(function() {
	setInterval('show()', 3000);
});

function show() {
	var i = Math.floor(Math.random() * 6);
	var j = Math.floor(Math.random() * 6);
	if (i == j) j++;
	
	switch(i) {
		case 0:
			light0();
			break;
		case 1:
			light1();
			break;
		case 2:
			light2();
			break;
		case 3:
			light3();	
			break;
		case 4:
			light4();
			break;
		case 5:
			light5();
			break;
		case 6:
			light6();
			break;
	}

	switch(j) {
		case 0:
			light0();
			break;
		case 1:
			light1();
			break;
		case 2:
			light2();
			break;
		case 3:
			light3();	
			break;
		case 4:
			light4();
			break;
		case 5:
			light5();
			break;
		case 6:
			light6();
			break;
	}
}

function light0() {
	var light_img = $('#light-img');	
	light_img.animate({
		right:'-130px'
	}, 1000, function() {
		light_img.css({'right':'25px'});
	});
}

function light1() {
	var light_img1 = $('#light-img1'); 
	light_img1.animate({
		right:'-255px'
	}, 1000, function() {
		light_img1.css({'right':'80px'});
	});
}

function light2() {
	var light_img2 = $('#light-img2'); 
	light_img2.animate({
		right:'-120px'
	}, 1000, function() {
		light_img2.css({'right':'-35px'});
	});
}

function light3() {
	var light_img3 = $('#light-img3'); 
	light_img3.animate({
		right:'-135px'
	}, 1000, function() {
		light_img3.css({'right':'-35px'});
	});
}

function light4() {
	var light_img4 = $('#light-img4'); 
	light_img4.animate({
		right:'-135px'
	}, 1000, function() {
		light_img4.css({'right':'-20px'});
	});
}

function light5() {
	var light_img5 = $('#light-img5'); 
	light_img5.animate({
		right:'-130px'
	}, 1000, function() {
		light_img5.css({'right':'5px'});
	});
}

function light6() {
	var light_img6 = $('#light-img6'); 
	light_img6.animate({
		right:'-130px'
	}, 1000, function() {
		light_img6.css({'right':'40px'});
	});
}