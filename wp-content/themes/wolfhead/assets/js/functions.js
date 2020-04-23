/* FUNCTIONS */
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#masthead .toggle .btn').addEventListener('click', function(e) {
		if ( document.getElementById('masthead').classList.contains('--menu') ) {
			document.querySelector('#masthead .toggle .btn i').setAttribute('class', 'dashicons dashicons-menu');
		} else {
			document.querySelector('#masthead .toggle .btn i').setAttribute('class', 'dashicons dashicons-no-alt');
		}
		document.getElementById('masthead').classList.toggle('--menu');
		document.getElementById('content').classList.toggle('--menu');
		e.preventDefault;
		return false;
	});

	if ( document.querySelector('#pagenav') ) {
		var inner = document.querySelector('#inner.entry-list');
		var infiniteScrollInner = new InfiniteScroll( inner, {
			path: '#pagenav .next > a',
			append: '.entry-list-item',
			history: false,
			hideNav: '#pagenav'
		});
		infiniteScrollInner.on( 'append', function( response, path, items ) {
			//wolfheadTimaeagoInit();
			;(function() {
				var bLazy = new Blazy();
			})();
			timeago();
		});
	}
	
	function isOverflown(element) {
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}
	
	function truncateCredit() {
		if ( document.querySelector('#banner-credit') ) {
			var bannerCredit = document.querySelector('#masthead #banner-credit span:last-of-type');
			if ( isOverflown( bannerCredit ) === true ) {
				bannerCredit.querySelector('a').classList.add( '--truncated' );
				bannerCredit.querySelector('a').setAttribute('title', document.querySelector('#banner-credit').getAttribute('data-tippy-content'));
			} else if ( isOverflown( bannerCredit ) === false ) {
				bannerCredit.querySelector('a').classList.remove( '--truncated' );
				bannerCredit.querySelector('a').removeAttribute('title');
			}
		}
	}
	
	truncateCredit();
	document.body.addEventListener('resize', truncateCredit);

	/*function wolfheadTimaeagoInit(s = '[datetime]') {
		/*jQuery.timeago.settings.allowFuture = true;
		jQuery.timeago.settings.strings.suffixFromNow = 'until live';
		jQuery.timeago.settings.cutoff = 1000*60*60*24*2;
		jQuery(s).timeago();
		timeago().settings.cutoff = 1000*60*60*24*2;
		timeago().render(document.querySelectorAll(s), 'en_US');
	}

	wolfheadTimaeagoInit();*/




	 var BrowserDetect = {
			init: function () {
				this.browser = this.searchString(this.dataBrowser) || "Other";
				this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
			},
			searchString: function (data) {
				for (var i = 0; i < data.length; i++) {
					var dataString = data[i].string;
					this.versionSearchString = data[i].subString;

					if (dataString.indexOf(data[i].subString) !== -1) {
						return data[i].identity;
					}
				}
			},
			searchVersion: function (dataString) {
				var index = dataString.indexOf(this.versionSearchString);
				if (index === -1) {
					return;
				}

				var rv = dataString.indexOf("rv:");
				if (this.versionSearchString === "Trident" && rv !== -1) {
					return parseFloat(dataString.substring(rv + 3));
				} else {
					return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
				}
			},

			dataBrowser: [
				{string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
				{string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
				{string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
				{string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
				{string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
				{string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

				{string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
				{string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
			]
		};

		BrowserDetect.init();
		//document.write("You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b>");

		var bv= BrowserDetect.browser;
		if( bv == "Chrome"){
			document.body.setAttribute("data-agent", "chrome");
		}
		else if(bv == "MS Edge"){
		 document.body.setAttribute("data-agent", "edge");
		}
		else if(bv == "Explorer"){
		 document.body.setAttribute("data-agent", "ie");
		}
		else if(bv == "Firefox"){
		 document.body.setAttribute("data-agent", "firefox");
		}
		
	function isOverflow() {
		var dHeight = document.body.clientHeight;
		var wHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		//console.log('Document Height: ' + dHeight);
		//console.log('Window Height: ' + wHeight);
		if ( dHeight > wHeight ) {
			document.querySelector('body').classList.add('--overflow');
		} else {
			document.querySelector('body').classList.remove('--overflow');
		}
	}

	isOverflow();
	document.body.addEventListener('resize', isOverflow);
	window.addEventListener('resize', isOverflow);

	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true,
		updateURL: false,
		topOnEmptyHash: true
	});

	tippy('.entry-format-icon, .comments-icon', {
		arrow: false,
		placement: 'right',
		animation: 'shift-away',
		theme: 'dark',
		distance: -10
	});

	tippy('#image-credit', {
		arrow: false,
		placement: 'top',
		flip: true,
		animation: 'shift-away',
		theme: 'dark',
		distance: 0
	});
	
	tippy('.credit > span', {
		arrow: false,
		placement: 'bottom',
		flip: true,
		animation: 'shift-away',
		theme: 'dark',
		size: 'small',
		distance: 4
	});

	;(function() {
		var bLazy = new Blazy();
	})();

	window.onload = function() {
		document.body.classList.add('--loaded');
		
		var mags = document.querySelectorAll('div[data-mag]');
		for ( i=0; i < mags.length; i++ ) {
			var mag = mags[i];
			magnify(mag.getElementsByTagName('img')[0], mag.getAttribute('data-mag'));
		}
	}
	
	function timeDifference(current, previous, text) {
		var msPerMinute = 60 * 1000;
		var msPerHour = msPerMinute * 60;
		var msPerDay = msPerHour * 24;
		var msPerMonth = msPerDay * 30;
		var msPerYear = msPerDay * 365;
		var elapsed = current - previous;
		if (elapsed < msPerMinute) {
			return ['under a minute ago', true];   
		} else if (elapsed < msPerHour && Math.round(elapsed/msPerMinute) === 1) {
			return ['a minute ago', true];
		} else if (elapsed < msPerHour) {
			return [Math.round(elapsed/msPerMinute) + ' minutes ago', true];
		} else if (elapsed < msPerDay && Math.round(elapsed/msPerHour ) === 1) {
			return ['an hour ago', true];
		} else if (elapsed < msPerDay) {
			return [Math.round(elapsed/msPerHour ) + ' hours ago', true];
		} else if (elapsed < msPerMonth && Math.round(elapsed/msPerDay) === 1) {
			return ['yesterday', true]; 
		} else {
			return [text, false];
		}
	}
	
	function timeago() {
		var timestamps = document.querySelectorAll('.timeago');
		for ( i=0; i < timestamps.length; i++ ) {
			var timestamp = timestamps[i];
			if ( timestamp.classList.contains('--loaded') === false ) {
				var date = new Date(timestamp.getAttribute('datetime'));
				var newdate = timeDifference(new Date(), date, timestamp.innerText);
				if ( newdate[1] ) {
					timestamp.setAttribute('title', timestamp.innerText);
					timestamp.classList.add('--loaded');
				}
			}
		}
		function currentTimeago() {
			timestamps = document.querySelectorAll('.timeago.--loaded');
			for ( i=0; i < timestamps.length; i++ ) {
				var timestamp = timestamps[i];
				var date = new Date(timestamp.getAttribute('datetime'));
				var newdate = timeDifference(new Date(), date, timestamp.getAttribute('title'));
				timestamp.innerText = newdate[0];
				if ( newdate[1] === false ) {
					timestamp.classList.remove('--loaded');
					timestamp.classList.removeAttribute('title');
				}
			}
		}
		currentTimeago();
		setInterval(currentTimeago, 1000*60);
	}
	
	timeago();
	
	function magnify(img, zoom) {
	  var glass, w, h, bw;
	  /*create magnifier glass:*/
	  glass = document.createElement("DIV");
	  glass.setAttribute("class", "mag-glass");
	  /*insert magnifier glass:*/
	  img.parentElement.insertBefore(glass, img);
	  /*set background properties for the magnifier glass:*/
	  glass.style.backgroundImage = "url('" + img.src + "')";
	  glass.style.backgroundRepeat = "no-repeat";
	  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
	  bw = 3;
	  w = glass.offsetWidth / 2;
	  h = glass.offsetHeight / 2;
	  /*execute a function when someone moves the magnifier glass over the image:*/
	  glass.addEventListener("mousemove", moveMagnifier);
	  img.addEventListener("mousemove", moveMagnifier);
	  /*and also for touch screens:*/
	  glass.addEventListener("touchmove", moveMagnifier);
	  img.addEventListener("touchmove", moveMagnifier);
	  function moveMagnifier(e) {
		var pos, x, y;
		/*prevent any other actions that may occur when moving over the image*/
		e.preventDefault();
		/*get the cursor's x and y positions:*/
		pos = getCursorPos(e);
		x = pos.x;
		y = pos.y;
		/*prevent the magnifier glass from being positioned outside the image:*/
		if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
		if (x < w / zoom) {x = w / zoom;}
		if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
		if (y < h / zoom) {y = h / zoom;}
		/*set the position of the magnifier glass:*/
		glass.style.left = (x - w) + "px";
		glass.style.top = (y - h) + "px";
		/*display what the magnifier glass "sees":*/
		glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
	  }
	  function getCursorPos(e) {
		var a, x = 0, y = 0;
		e = e || window.event;
		/*get the x and y positions of the image:*/
		a = img.getBoundingClientRect();
		/*calculate the cursor's x and y coordinates, relative to the image:*/
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		/*consider any page scrolling:*/
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return {x : x, y : y};
	  }
	}
});