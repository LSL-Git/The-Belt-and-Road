$(document).ready(function() {
	var js = $('#js');
	var yx = $('#yx');
	var yy = $('#yy');
	var yj = $('#yj');

	var kl1 = $('#kl1');
	var kl2 = $('#kl2');
	var kl3 = $('#kl3');
	var kl4 = $('#kl4');

	js.click(function() {
		kl1.css('display','block');
		kl2.css('display','none');
		kl3.css('display','none');
		kl4.css('display','none');
		js.css({'boxShadow':'6px 5px 14px #000','background':'#961836'});
		yx.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yy.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yj.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
	});

	yx.click(function() {
		kl1.css('display','none');
		kl2.css('display','block');
		kl3.css('display','none');
		kl4.css('display','none');
		js.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yx.css({'boxShadow':'6px 5px 14px #000','background':'#616217'});
		yy.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yj.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
	});

	yy.click(function() {
		kl1.css('display','none');
		kl2.css('display','none');
		kl3.css('display','block');
		kl4.css('display','none');
		js.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yx.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yy.css({'boxShadow':'6px 5px 14px #000','background':'#148d42'});
		yj.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
	});

	yj.click(function() {
		kl1.css('display','none');
		kl2.css('display','none');
		kl3.css('display','none');
		kl4.css('display','block');
		js.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yx.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yy.css({'boxShadow':'2px 2px 12px #098','background':'#2fd2b9'});
		yj.css({'boxShadow':'6px 5px 14px #000','background':'#092235'});
	});
});