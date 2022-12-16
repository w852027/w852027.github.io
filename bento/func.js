var index = 0;
var menu_status=0;
	var slides = document.getElementsByClassName("slide-pic");
	var dots = document.getElementsByClassName("dot");
	var len = slides.length;
	dots[index].style.opacity='1';
	slides[index].style.display = 'inline';
	setInterval(img_next, 3000);
	function img_dot(i) {
		index=i;
		for(var i=0; i<len; i++){
			dots[i].style.opacity='0.6';
			slides[i].style.display = 'none';
		}
		dots[index].style.opacity='1';
		slides[index].style.display = 'inline';
	}
	function img_next(){
		index++;
		if(index>=len) index = 0;
		img_dot(index)
	}
	function img_previous(){
		index--;
		if(index<0) index = len-1;
		img_dot(index)
	}
	function close_chat(){
		document.getElementById("chat").style.display="none";
		document.getElementById("chat-bottom").style.display="none";
	}
	function show_chat(){
		document.getElementById("chat").style.display="flex";
		document.getElementById("chat-bottom").style.display="inline";
	}
	function menu() {
		if (menu_status==0){
			menu_status++
			if(menu_status==2)menu_status=0
			document.getElementById("menu").style.display="inline";
		}
		else menu_ok()
	}
	function menu_ok() {
		menu_status++
		if(menu_status==2)menu_status=0
		var query = Modernizr.mq('(max-width: 1199px)');
		if (query)document.getElementById("menu").style.display="none";	
	}
	$(window).resize(function() {
	    mq();
	});
	mq();