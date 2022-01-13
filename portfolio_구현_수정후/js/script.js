$(function(){

    opening_layer_txt();
	setTimeout(opening_layer,2000);

	function opening_layer_txt(){
		$('#opening p').animate({'bottom':'0'},1000);
	}
	function opening_layer(){
		$('#opening').animate({'top':'-100%'},2000);
	}

    let section = document.getElementsByTagName('section');
    let link=$('.link');
    let navBtn = document.querySelectorAll('nav li')
    let pageNum =0;
    let totalNum = section.length;

    const SEC03_SLIDER = $('.boxers'); 

    const SEC02_SVG = $('#sec02 .bg_line');
    const SEC03_SVG = $('#sec03 .bg_line03');
    const SEC04_SVG = $('#sec04 .bg_line04');
    const SEC04_SVG02 = $('#sec04 .bg_line05');
    const SEC05_SVG = $('#sec05 .bg_line06');
    const SEC06_SVG = $('#sec06 .bg_line07');
    const SEC06_SVG02 = $('#sec06 .bg_line08');
    const SEC07_SVG = $('#sec07 .bg_line09');
    const SEC07_SVG02 = $('#sec07 .bg_line10');

link.smoothScroll(300)


    //   scroll 
    window.addEventListener('scroll',function(event){
        let scroll = this.scrollY|| window.pageYOffset//ie;
        let outHeight = window.outerHeight/3;
            // 0section
            if(scroll > section[0].offsetTop - outHeight && scroll < section[0].offsetTop - outHeight +section[0].offsetHeight){
                pageNum =0;
                console.log(pageNum);
                sec1()
                }
                // 1section
                if(scroll > section[1].offsetTop - outHeight && scroll < section[1].offsetTop - outHeight +section[1].offsetHeight){
                    pageNum =1;
                    console.log(pageNum);
                    sec2()
                }
                // 2section
                if(scroll > section[2].offsetTop - outHeight && scroll < section[2].offsetTop - outHeight +section[2].offsetHeight){
                    pageNum =2;
                    console.log(pageNum);
                    sec3()
                }
                // 3section
                if(scroll > section[3].offsetTop - outHeight && scroll < section[3].offsetTop - outHeight +section[3].offsetHeight){
                    pageNum =3;
                    console.log(pageNum);
                    sec4()
                }
                // 4section
                if(scroll > section[4].offsetTop - outHeight && scroll < section[4].offsetTop - outHeight +section[4].offsetHeight){
                    pageNum =4;
                    console.log(pageNum);
                    sec5()
                }
                // 5section
                if(scroll > section[5].offsetTop - outHeight && scroll < section[5].offsetTop - outHeight +section[5].offsetHeight){
                    pageNum =5;
                    console.log(pageNum);
                    sec6()
                }
                // 6section
                if(scroll > section[6].offsetTop - outHeight && scroll < section[6].offsetTop - outHeight +section[6].offsetHeight){
                    pageNum =6;
                    console.log(pageNum);
                    sec7()
                }
                // 7section
                if(scroll > section[7].offsetTop - outHeight && scroll < section[7].offsetTop - outHeight +section[7].offsetHeight){
                    pageNum =7;
                    console.log(pageNum);
                    sec8()
                }
                // 8section
                if(scroll > section[8].offsetTop - outHeight && scroll < section[8].offsetTop - outHeight +section[8].offsetHeight){
                    pageNum =8;
                    console.log(pageNum);
                    sec9()
                }

        pageChangeFunc()

        $('.section_product .prd_mask').addClass('active');
        $('.section_product .text_img').addClass('active');


    })




    function pageChangeFunc(){
        for(let i =0;i<totalNum;i++){
            section[i].classList.remove('active');
            navBtn[i].classList.remove('active')
        }
        section[pageNum].classList.add('active');
        navBtn[pageNum].classList.add('active')
    }
    pageChangeFunc()
    sec1()


//    section 함수

    function sec1(){
    }

    function sec2(){

        SEC02_SVG.addClass('On')

    }

    function sec3(){

        $('.bg_line02').transition({
            'width':'826px'
        },2000);

        
        setTimeout(function(){
            
            SEC03_SVG.addClass('On')
            
        },1800);

    }

    function sec4(){

        setTimeout(function(){

            SEC04_SVG02.addClass('On')

        },4500)

        SEC04_SVG.addClass('On')

    }

    function sec5(){

        SEC05_SVG.addClass('On')

    }

    function sec6(){

        SEC06_SVG.addClass('On')

        setTimeout(function(){

            SEC06_SVG02.addClass('On')
        },1000)
    }

    function sec7(){

        SEC07_SVG.addClass('On')

        setTimeout(function(){
            
            SEC07_SVG02.addClass('On')
            
        },1800);

    }

    function sec8(){

        $('.bg_line11').transition({
            'width':'345px'
        },2000);

        setTimeout(function(){

        $('.bg_box02').transition({
            'width':'20px',
            'height':'20px'
        },2000);

        },1800);

        
    }
    const path = anime.path('.angel_line path');

    anime({
    targets: '#sec08 .angel_flying',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 5000,
    loop: true,
    direction: 'alternate',
    });

    function sec9(){   
    }

    SEC03_SLIDER.slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows:true,
		centerMode:false,
		variableWidth: true,
		responsive:[{
		// breakpoint: 767,
		settings: {arrows: false,}
		},
        {
            breakpoint: 1439,
            slidesToShow: 3
        }
	]
	})


})

