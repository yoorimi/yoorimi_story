(function(){

	let x=0;
	let y=0;
	let mx =0;
	let my=0;
	let speed = 0.03;
	let scrollTop =0;
	let parallax_0,parallax_1,parallax_2,parallax_3,parallax_4,parallax_5,parallax_6,parallax_7;


	window.onload = function(){
					parallax_1 = document.querySelector('.mount.m01');
					parallax_2 = document.querySelector('.mount.m02');
					parallax_3 = document.querySelector('.mount.m03');
					parallax_4 = document.querySelector('.mount.m04');
					parallax_5 = document.querySelector('.sec01_txt');
					// parallax_6 = document.querySelector('#sec01 .numTitle');

					window.addEventListener('resize', stageResize,false);
					window.addEventListener('mousemove',mouseMove,false);
					window.addEventListener('scroll',scrollFunc,false);

					stageResize();
					loop()

	}

	function scrollFunc(){
					scrollTop = document.documentElement.scrollTop;
					// console.log(scrollTop);//전체 높이값
					// console.log(parallax_0)
					// parallax_0.style.transform ="translate3d(0px," + scrollTop * .03 + "px, 0px)";
					parallax_1.style.transform ="translate3d(0px," + scrollTop * .5 + "px, 0px)";
					parallax_2.style.transform ="translate3d(0px," + scrollTop * .3 + "px, 0px)";
					parallax_3.style.transform ="translate3d(0px," + scrollTop * .2 + "px, 0px)";
					// parallax_4.style.transform ="translate3d(0px," + scrollTop * .2 + "px, 0px)";
					parallax_5.style.transform ="translate3d(0px," + scrollTop * .5 + "px, 0px)";

	}
	function stageResize(){}
	function loop(){
					mx += (x-mx)*speed;
					my += (y-my)*speed;

					// parallax_0.style.transform = "scale(1.1) translate(" + mx /50 + "px," + -scrollTop * .02 + "px)";
					// parallax_6.style.transform= "scale(1.1) translate("+-mx/50+"px,"+ scrollTop*.005+"px)";
					window.requestAnimationFrame(loop);
	
	}
	function mouseMove(e){
					x= (e.clientX - window.innerWidth / 2);
					y= (e.clientY - window.innerWidth / 2);
	}

	// sec01
	
	gsap.to('.sec01_cloud04', {duration: 40, x: 500, yoyo:true,repeat:-1}, "+=1")
	gsap.to('.sec01_cloud03', {duration: 40, x: 500, yoyo:true,repeat:-1}, "+=1")
	gsap.to('.sec01_cloud02', {duration: 30, x: 500, yoyo:true,repeat:-1}, "+=1")
	gsap.to('.sec01_cloud01', {duration: 20, x: 200, yoyo:true,repeat:-1}, "+=1")
	
	// sec03

	gsap.to('.sec03_cloud', {duration: 10, y: 100, yoyo:true,repeat:-1}, "+=1")

	// sec04

	gsap.to('.cloud_sec04', {duration: 100, x: 600, yoyo:true,repeat:-1}, "+=1")

	// sec07

	gsap.to('.sec07_cloud', {duration: 10, x: 100, yoyo:true,repeat:-1}, "+=1")

	// sec08 

	gsap.to('.sec08_bottom_cloud', {duration: 10, x: -100, yoyo:true,repeat:-1}, "+=1")

})()