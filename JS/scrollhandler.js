    //Set each section's height equals to the window height
    $('section').height($(window).height());
    /*set the class 'active' to the first element 
     this will serve as our indicator*/
    $('section').first().addClass('active');

    /* handle the mousewheel event together with 
     DOMMouseScroll to work on cross browser */
	 //target the entire page, and listen for touch events

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();//prevent the default mousewheel scrolling
        var active = $('section.active');
        //get the delta to determine the mousewheel scrol UP and DOWN
        var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
        
        //if the delta value is negative, the user is scrolling down
        if (delta < 0) {
            //mousewheel down handler
            next = active.next();
            //check if the next section exist and animate the anchoring
            if (next.length) {
               /*setTimeout is here to prevent the scrolling animation
                to jump to the topmost or bottom when 
                the user scrolled very fast.*/
                var timer = setTimeout(function () {
                    /* animate the scrollTop by passing 
                    the elements offset top value */
                    $('body, html').animate({
                        scrollTop: next.offset().top
                    }, 'slow');
                    
                    // move the indicator 'active' class
                    next.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        } else {
            //mousewheel up handler
            /*similar logic to the mousewheel down handler 
            except that we are animate the anchoring 
            to the previous sibling element*/
            prev = active.prev();

            if (prev.length) {
                var timer = setTimeout(function () {
                    $('body, html').animate({
                        scrollTop: prev.offset().top
                    }, 'slow');

                    prev.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        }
    });
	$('html, body').on('touchstart touchmove', function(e){ 
     //prevent native touch activity like scrolling
     scroll = true; 
});
	
$(function() {
  $(".home").click(function() {
	$('section').removeClass('active')
    $("#home").addClass('active');
  });
});	
$(function() {
  $(".section1").click(function() {
	$('section').removeClass('active')
    $("#section1").addClass('active');
  });
});	
$(function() {
  $(".section2").click(function() {
	$('section').removeClass('active')
    $("#section2").addClass('active');
  });
});	
$(function() {
  $(".section3").click(function() {
	$('section').removeClass('active')
    $("#section3").addClass('active');
  });
});	
$(function() {
  $(".section4").click(function() {
	$('section').removeClass('active')
    $("#section4").addClass('active');
  });
});	
$(function() {
  $(".section5").click(function() {
	$('section').removeClass('active')
    $("#section5").addClass('active');
  });
});	
 $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
