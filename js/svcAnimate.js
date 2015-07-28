var app = app || {};
app.svcAnimate = {

	$leftHorns: $('#ramSkin .leftHorn polygon'),
	designTheme: function(){
		$('body').removeClass('development');
		$('body').addClass("design");
		$('#ramSkin').attr('class','svgWrapper');

		$('#primaryNav').addClass('desNav').removeClass('devNav');

		$('#devPortfolio').addClass('hidden');
		$('#desPortfolio').removeClass('hidden');

		$('footer').addClass('desFooter').removeClass('devFooter');

		$('.excerpt.dev').addClass('hidden');
		$('.excerpt.des').removeClass('hidden');
		var rescale = TweenLite.to('#ramSkin .svgComponents', 0, {
				scale: 0.5,
				transformOrigin: "center 25%"

		});

		aExplode.reverse();
		// app.utilities.scrollToEl('#introduction');

	},
	developerTheme: function(){
		$('body').removeClass('design');
		$('body').addClass('development');

		$('#primaryNav').addClass('devNav').removeClass('desNav');

		$('#desPortfolio').addClass('hidden');
		$('#devPortfolio').removeClass('hidden');

		$('footer').addClass('devFooter').removeClass('desFooter');

		$('.excerpt.des').addClass('hidden');
		$('.excerpt.dev').removeClass('hidden');

		this.aExpl('#ramSkin .leftHorn', "negative",0);
		this.aExpl('#ramSkin .rightHorn', "positive",0);
		this.aExpl('#ramSkin .leftSide', "negative",0.02);
		this.aExpl('#ramSkin .rightSide', "positive",0.02);

		aExplode.to('#ramSkin',.04,{
			opacity:0,
			display:'none'
		});

		aExplode.play();
		// app.utilities.scrollToEl('#introduction');
	},
	aExpl: function(element,value,seconds){
		children = $(element).children('polygon');
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
		var	array = $(element).children('*');
		array = this.randArr(array);
		var view = this;
		var r, g, b, a;

		var params = {}
		_.each(array, function(polygon){

			r = app.rgbaRange.r.val(); //(Math.random())* (rgbaRange.r.max- rgbaRange.r.min) + (rgbaRange.r.min); // (25-0) + (0);
			g = app.rgbaRange.g.val(); //(Math.random())* (rgbaRange.g.max- rgbaRange.g.min) + (rgbaRange.g.min); // (200-100) + 100;
			b = app.rgbaRange.b.val(); //(Math.random())* (rgbaRange.b.max- rgbaRange.b.min) + (rgbaRange.b.min); // (255-200) + 200;
			a = app.rgbaRange.a.val(); //Math.random() * (rgbaRange.a.max- rgbaRange.a.min) + (rgbaRange.a.min); // (0.8 - 0.2) + 0.2;
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
