$(document).ready(function() {
			$.fn.fullpage({
				verticalCentered: true,
				resize : true,
				slidesColor : ['#FFF', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
				scrollingSpeed: 700,
				easing: 'easeInQuart',
				menu: '#myMenu',
				navigation: false,
				navigationPosition: 'right',
				navigationTooltips: ['firstSlide', 'secondSlide'],
				slidesNavigation: true,
				slidesNavPosition: 'bottom',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				autoScrolling: false,
				scrollOverflow: false,
				css3: false,
				paddingTop: '3em',
				paddingBottom: '10px',
				fixedElements: '#element1, .element2',
				normalScrollElements: '#element1, .element2',
				keyboardScrolling: true,
				touchSensitivity: 15,
				continuousVertical: false,
				animateAnchor: true,
		
				//events
				onLeave: function(index, direction){},
				afterLoad: function(anchorLink, index){},
				afterRender: function(){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
				onSlideLeave: function(anchorLink, index, slideIndex, direction){}
			});
		});