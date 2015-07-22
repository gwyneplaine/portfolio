// var $ramSkin = $('#ramSkin');
aExplode = new TimelineLite({ onComplete: hideEl });
		var hideEl= function(){
			$('#ramSkin').attr('class','svgWrapper hidden');
		}
skullNeut = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:2});
skinNeut = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:2});
	var reverse = function(){
		debugger;
		console.log("Complete");
	}
var rgbaRange = {
	r:{
			min: 0,
	 		max: 25
		},
	g: {
			min:100,
			max:200
		},
	b: {
			min:200,
			max:255
		},
	a: {
			min: 0.2,
			max:0.8
		}
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
		// for (var i = 1; i <= this.$leftHorns.length; i++){
		// 	var lhornshards = '#ramSkin .leftHorn polygon:nth-child(' + i + ')';
		// 	var rhornshards = '#ramSkin .rightHorn polygon:nth-child(' + i + ')';
		// 	console.log($(lhornshards));
		// 	aExplode.to(lhornshards, 0.01,{
		// 		rotation: i*-5,
		// 		transform: 'translate('+(-500*i)+'px) ',
		// 		transformOrigin: 'left center',
		// 	});
		// 	aExplode.to(rhornshards, 0.01,{
		// 		rotation: i*5,
		// 		transform: 'translate('+(500*i)+'px) ',
		// 		transformOrigin: 'right center',
		// 	});
		// }
		this.aExpl('#ramSkin .leftHorn', "negative",0);
		this.aExpl('#ramSkin .rightHorn', "positive",0);
		this.aExpl('#ramSkin .leftSide', "negative",0.02);
		this.aExpl('#ramSkin .rightSide', "positive",0.02);

		aExplode.to('#ramSkin',.04,{
			opacity:0,
			display:'none'
		});

		aExplode.play();
	},
	aExpl: function(element,value,seconds){
		children = $(element).children();
		console.log($(element).attr('class'));
		console.log(children);
		console.log($(children[0]).attr('class'));
		var k = 300;
		for(var i = 0; i<children.length; i++){
			var j = 0;

			var transOrig = ""
			var transX  = 0;

			if(value === "negative"){
				j = (i+1)*-1;
				transOrig = 'left center';
			}else if(value === "positive"){
				j = i+1;
				transOrig = 'right center';

			}
			transX = 500*j;
			transY = k * (i+1);
			var polyClass = element + ' .'+$(children[i]).attr('class');
			var params = {
				rotation: j*10,
				transform: 'translate('+ (transX) +'px, '+(transY)+'px) ',
				transformOrigin: transOrig
			}
			this.addTo(aExplode,polyClass,seconds, params);
			k = k-200;
		}
	},
	float: function(){
		var params = {

		}
		// this.addTo(bgAnim,'polygons',3s)
	},
	color: function(timeline, element, rgbRange){
		var	array = $(element).children('polygon');
		array = this.randArr(array);
		var view = this;
		var r, g, b, a;

		var params = {}
		_.each(array, function(polygon){

			r = (Math.random())* (rgbaRange.r.max- rgbaRange.r.min) + (rgbaRange.r.min); // (25-0) + (0);
			g = (Math.random())* (rgbaRange.g.max- rgbaRange.g.min) + (rgbaRange.g.min); // (200-100) + 100;
			b = (Math.random())* (rgbaRange.b.max- rgbaRange.b.min) + (rgbaRange.b.min); // (255-200) + 200;
			a =  Math.random() * (rgbaRange.a.max- rgbaRange.a.min) + (rgbaRange.a.min); // (0.8 - 0.2) + 0.2;
			params = {
				fill: "rgba("+ r +","+ g +","+ b +","+a+")",
				stroke: "rgba("+ r +","+ g +","+ b +","+a+")"
			}

			console.log('r:'+r+'g:'+g+'b:'+b)
			view.addTo(timeline, polygon, 0.2, params);
		});
	},
	randArr: function shuffle(array) {
    var counter = array.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
	},
	addTo: function(timeline, element, seconds, parameters){
		timeline.to(element, seconds, parameters);
	}
};

$(document).ready(function(){
	var midX = $(window).innerWidth/2;
	var midY = $(window).innerHeight/2;
	svcAnimate.color(skullNeut,'#ramSkull g');
	rgbaRange.r.min = 100;
	rgbaRange.r.max = 255;
	rgbaRange.b.min = 0;
	rgbaRange.b.max = 25;
	rgbaRange.g.min = 20;
	rgbaRange.g.max = 50;
	svcAnimate.color(skinNeut,'#ramSkin g');

	var tween2 = TweenLite.to('#ramSkull .svgComponents', 0, {
		scale: 0.5,
		transformOrigin: "center top"
	});
	// var yoyo = bgAnim.yoyo();
	// bgAnim.yoyo(true);
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
