$(function(){

	copyprotect();

	function copyprotect(){
		$('img').mousedown(function(){
			return false;
		});
	}

	 $('.menu-mobile').click(function(){

	 	$('.menu-mobile').find('ul').slideToggle(300);

	 	$('.menu-mobile').css('user-select','none');
	 	$('.menu-mobile').css('-ms-user-select','none');
	 	$('.menu-mobile').css('-moz-user-select','none');
	 	$('.menu-mobile').css('-khtml-user-select','none');
	 	$('.menu-mobile').css('-webkit-user-select','none');

	 	stopToggle();

	 });

	function stopToggle(){
		$('.menu-mobile ul').click(function(e){
	 		e.stopPropagation();
	 	});
	}
	 
	windowResize();
	initMosaico();
	offSetMenu()

	function windowResize(){

		$(window).resize(function(){

			setTimeout(function(){
				location.reload();
			},1000);
		
		var mosaicoImage = $('.mosaico-image')
		var qtdMosaico = $('.mosaico-image').length
		var curindex = 0;

		while(curindex < qtdMosaico){
			var xOffChild = mosaicoImage.eq(curindex).find('h3').offset().left - $('html,body').offset().left;
			var yOffChild = mosaicoImage.eq(curindex).find('h3').offset().top - $('html,body').offset().top;
			var invisibleCur = $('.invisible').eq(curindex);
			var marginLeft = mosaicoImage.find('h3').css('margin-left');
			invisibleCur.css('left',xOffChild - marginLeft.match(/[0-9]{2}/));
			invisibleCur.css('top',yOffChild);
			curindex++;
		}

		});//WINDOW RESIZE()

	};

	function initMosaico(){

		var mosaicoImage = $('.mosaico-image')
		var qtdMosaico = $('.mosaico-image').length
		var curindex = 0;

		while(curindex < qtdMosaico){
			var xOffChild = mosaicoImage.eq(curindex).find('h3').offset().left - $('html,body').offset().left;
			var yOffChild = mosaicoImage.eq(curindex).find('h3').offset().top - $('html,body').offset().top;
			var invisibleCur = $('.invisible').eq(curindex);
			var marginLeft = mosaicoImage.find('h3').css('margin-left');
			invisibleCur.css('left',xOffChild - marginLeft.match(/[0-9]{2}/));
			invisibleCur.css('top',yOffChild);
			curindex++;
		};

		setTimeout(function(){

			var mosaicoImage = $('.mosaico-image')
			var qtdMosaico = $('.mosaico-image').length
			var curindex = 0;

			while(curindex < qtdMosaico){
				var xOffChild = mosaicoImage.eq(curindex).find('h3').offset().left - $('html,body').offset().left;
				var yOffChild = mosaicoImage.eq(curindex).find('h3').offset().top - $('html,body').offset().top;
				var invisibleCur = $('.invisible').eq(curindex);
				var marginLeft = mosaicoImage.find('h3').css('margin-left');
				invisibleCur.css('left',xOffChild - marginLeft.match(/[0-9]{2}/));
				invisibleCur.css('top',yOffChild);
				curindex++;
			}

			$('.mosaico-image').hover(function(){

				var indexAtual = $(this).index('.mosaico-image');
				$(this).siblings('.invisible').eq(indexAtual).css('transition','0.5s')
				$(this).siblings('.invisible').eq(indexAtual).css('color','black')
				$(this).find('h3').css('color','transparent');
				$(this).css('opacity','0.3');
				$(this).css('transition','0.5s');

			},function(){

				var indexAtual = $(this).index('.mosaico-image');
				$(this).siblings('.invisible').eq(indexAtual).css('transition','0')
				$(this).siblings('.invisible').eq(indexAtual).css('color','transparent')
				$(this).find('h3').css('color','white');
				$(this).css('opacity','1');
				$(this).css('transition','0');

			});

		},1000)
		
	};//FINAL DO initMosaico()

	function offSetMenu(){

		$('.menu-desktop a').click(function(){
			var attrOff = $(this).attr('href');
			var offSetTop = $(attrOff).offset().top;
			$('html,body').animate({'scrollTop':offSetTop});
		})

		$('.menu-mobile a').click(function(){
			var attrOff = $(this).attr('href');
			var offSetTop = $(attrOff).offset().top;
			$('html,body').animate({'scrollTop':offSetTop});
		})

	};//FINAL DO offSetMenu()

});