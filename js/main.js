// var $ramSkin = $('#ramSkin');

var svcAnimate = {
	designTheme: function(){
		$('body').removeClass('development');
		$('body').addClass("design");
		$('#ramSkin').attr('class','svgWrapper');
		var rescale = TweenLite.to('#ramSkin .svgComponents', 2, {
			scale: 0.5,
			transformOrigin: "center top"
		});
		
	},
	developerTheme: function(){
		$('body').removeClass('design');
		$('body').addClass('development');
		var $leftHorns = $('#ramSkin .leftHorn polygon');
		console.log($leftHorns);

		
		for (var i = 1; i <= $leftHorns.length; i++){
			var hornshards = $('#ramSkin .leftHorn polygon:nth-child(' + i + ')');
			console.log($('.sect'+i));
			var hornSplosion = TweenLite.to('#ramSkin .leftHorn .sect'+i,2,{
				transform: 'translate('+(200 * i)+'px) rotate('+(i * -50)+'px)',
				transformOrigin: 'left center',
			});
		}

		$('#ramSkin').attr('class','svgWrapper hidden');

		// $('#ramSkin').attr('class','svgWrapper exploded');
		// $('#ramSkin').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e){
		// 	$('#ramSkin').attr('class', 'svgWrapper hidden');
		// });
	}
};

$(document).ready(function(){
	var midX = $(window).innerWidth/2;
	var midY = $(window).innerHeight/2;

	var tween2 = TweenLite.to('#ramSkull .svgComponents', 2, {
		scale: 0.5,
		transformOrigin: "center top"
	});
	// $('.svgComponents').css('transform', 'translate('+ midX +','+ midY +')');
	$('body').on('click','#ramSkull', function(event){
		event.stopImmediatePropagation();
		console.log("this is being clicked");
		svcAnimate.designTheme();
	});
	// $(window).on('resize',function(){
	// 	var winH = $(window).innerHeight();
	// 	var winW = $(window).innerWidth();
	// 	$('svg').attr('viewBox','0 0 '+ winW + ' ' + winH + ' ')
	// })
	$('body').on('click','#ramSkin',function(event){
		event.stopImmediatePropagation();
		svcAnimate.developerTheme();
	})

});