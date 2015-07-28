// var $ramSkin = $('#ramSkin');
var app = app || {};

aExplode = new TimelineLite({ onComplete: hideEl });
		var hideEl= function(){
			$('#ramSkin').attr('class','svgWrapper hidden');
		}

skullNeut = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:2});
bgDev = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:2});
bgDes = new TimelineMax({yoyo:true,repeat:-1, repeatDelay:2});
skinNeut = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:1});
	var reverse = function(){
		debugger;
		console.log("Complete");
	}
app.eventListeners = function(){
	$('body').on('click','#ramSkull', function(event){
		event.stopImmediatePropagation();
		app.svcAnimate.designTheme();
	});

	$('body').on('click','#ramSkin',function(event){
		event.stopImmediatePropagation();
		app.svcAnimate.developerTheme();
	});

	$('body').on('click','#designLink',function(event){
		event.preventDefault();
		event.stopImmediatePropagation();

		$('#primaryNav a').removeClass('selected');
		$(this).addClass('selected');

		app.svcAnimate.designTheme();
	});
	$('body').on('click','#contactLink', function(event){
		event.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $("#contactMe").offset().top
			}, 2000);
	});
	$('body').on('click','#developmentLink',function(event){
		event.preventDefault();
		event.stopImmediatePropagation();

		$('#primaryNav a').removeClass('selected');
		$(this).addClass('selected');

		app.svcAnimate.developerTheme();
	});
	$('body').on('click','#portfolio', function(event){
			event.preventDefault();
			if($('body').hasClass('development')){
				app.utilities.scrollToEl('#devPortfolio');
			}else if($('body').hasClass('design')){
				app.utilities.scrollToEl('#desPortfolio')
			}
	})
}
app.rgbaRange = {
	r:{
			min: 0,
	 		max: 25,
			val: function(){
				return (Math.random())* (this.max- this.min) + (this.min);
			}
		},
	g: {
			min:100,
			max:200,
			val: function(){
				return (Math.random())* (this.max- this.min) + (this.min);
			}
		},
	b: {
			min:200,
			max:255,
			val: function(){
				return (Math.random())* (this.max- this.min) + (this.min);
			}
		},
	a: {
			min: 0.2,
			max:0.8,
			val: function(){
				return (Math.random())* (this.max- this.min) + (this.min);
			}
		}
}

app.utilities = {
	resizeShards: function(){
		var winW = $(window).width();
		$('.angleShardR').width(winW+800);
	},
	scrollToEl: function(elementID){
		$('html, body').animate(
			{
				scrollTop: $(elementID).offset().top
			}, 2000);
	}
}
$(document).ready(function(){
	app.midX = $(window).innerWidth/2;
	app.midY = $(window).innerHeight/2;
	app.eventListeners();
	app.svcAnimate.color(skullNeut,'#ramSkull g');
	app.utilities.resizeShards();
	$(window).on('resize',function(){
		app.utilities.resizeShards();
	})

	app.rgbaRange.r.min = 100, app.rgbaRange.r.max = 255;
	app.rgbaRange.b.min = 0, app.rgbaRange.b.max = 25;
	app.rgbaRange.g.min = 20, app.rgbaRange.g.max = 50;

	app.svcAnimate.color(skinNeut,'#ramSkin g');

	app.tween2 = TweenLite.to('#ramSkull .svgComponents', 1, {
		scale: 0.5,
		transformOrigin: "center 25%"
	});



});
