// var $ramSkin = $('#ramSkin');
aExplode = new TimelineLite({ onComplete: hideEl });
		var hideEl= function(){
			$('#ramSkin').attr('class','svgWrapper hidden');
		}
var svcAnimate = {
	$leftHorns: $('#ramSkin .leftHorn polygon'),
	designTheme: function(){
		$('body').removeClass('development');
		$('body').addClass("design");
		$('#ramSkin').attr('class','svgWrapper');
	var rescale = TweenLite.to('#ramSkin .svgComponents', 0, {
			scale: 0.5,
			transformOrigin: "center top"
	});
		aExplode.reverse();
	},
	developerTheme: function(){
		$('body').removeClass('design');
		$('body').addClass('development');
		console.log(this.$leftHorns);
		// debugger;
		for (var i = 1; i <= this.$leftHorns.length; i++){
			var lhornshards = '#ramSkin .leftHorn polygon:nth-child(' + i + ')';
			var rhornshards = '#ramSkin .rightHorn polygon:nth-child(' + i + ')';
			console.log($(lhornshards));
			// aExplode.to(lhornshards, 0.01,{
			// 	rotation: i*-50,
			// 	transformOrigin: 'center center',
			// });
			// aExplode.to(rhornshards, 0.01,{
			// 	rotation: i*50,
			// 	transformOrigin: 'center center',
			// })
			aExplode.to(lhornshards, 0.01,{
				rotation: i*-5,
				transform: 'translate('+(-500*i)+'px) ',
				transformOrigin: 'left center',
			});
			aExplode.to(rhornshards, 0.01,{
				rotation: i*5,
				transform: 'translate('+(500*i)+'px) ',
				transformOrigin: 'right center',
			})
		}
		aExplode.to('#ramSkin',0.05,{
			opacity:0,
			display:'none'
		});
		aExplode.play();
		

		// $('#ramSkin').attr('class','svgWrapper exploded');
		// $('#ramSkin').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e){
		// 	$('#ramSkin').attr('class', 'svgWrapper hidden');
		// });
	}
};

$(document).ready(function(){
	var midX = $(window).innerWidth/2;
	var midY = $(window).innerHeight/2;

	var tween2 = TweenLite.to('#ramSkull .svgComponents', 0, {
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