$(document).ready(function() {
	var but1 = $('#but1');
	var but2 = $('#but2');
	var but3 = $('#but3');

	var cont1 = $('#cont1');
	var cont2 = $('#cont2');
	var cont3 = $('#cont3');

	var l1 = $('#l1');
	var l2 = $('#l2');
	var l3 = $('#l3');

	var img_id = $('#img-id');

	but1.click(function() {
		but1.css({'color':'#f1ff34','opacity':'1'});
		but2.css({'color':'#fff','opacity':'0.8'});
		but3.css({'color':'#fff','opacity':'0.8'});
		l1.css('z-index','10');
		l2.css('z-index','9');
		l3.css('z-index','9');
		cont1.css('display','block');
		cont2.css('display','none');
		cont3.css('display','none');
		img_id.attr('src','../images/dimg1.png');
	});

	but2.click(function() {
		but2.css({'color':'#f1ff34','opacity':'1'});
		but1.css({'color':'#fff','opacity':'0.8'});
		but3.css({'color':'#fff','opacity':'0.8'});
		l2.css('z-index','10');
		l1.css('z-index','9');
		l3.css('z-index','9');
		cont1.css('display','none');
		cont2.css('display','block');
		cont3.css('display','none');
		img_id.attr('src','../images/dimg2.png');
	});

	but3.click(function() {
		but3.css({'color':'#f1ff34','opacity':'1'});
		but2.css({'color':'#fff','opacity':'0.8'});
		but1.css({'color':'#fff','opacity':'0.8'});
		l3.css('z-index','10');
		l2.css('z-index','9');
		l1.css('z-index','9');
		cont1.css('display','none');
		cont2.css('display','none');
		cont3.css('display','block');
		img_id.attr('src','../images/dimg3.png');
	});
});