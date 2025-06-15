$(document).ready(function() {
    // Initialize Materialize components
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        if ($target.length) {
            // Close menu if open
            $("#theMenu").removeClass("menu-open");
            
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 70
            }, 900, 'swing', function() {
                window.location.hash = target;
            });
        }
    });

    // Enhanced skill bars animation
    var skillsAnimated = false;
    
    function animateSkillBars() {
        if (!skillsAnimated) {
    $('.skill-bar-in').each(function() {
        var $this = $(this);
                var width = $this.attr('data-width');
                
                $this.animate({
                    width: width
                }, {
                    duration: 2000,
                    easing: 'swing'
                });
            });
            skillsAnimated = true;
        }
    }
    
    // Check if skills section is in viewport
    function checkSkillsInView() {
        var skillsSection = $('#skills');
        if (skillsSection.length) {
            var elementTop = skillsSection.offset().top;
            var elementBottom = elementTop + skillsSection.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < (viewportBottom - 100)) {
                animateSkillBars();
            }
        }
    }
    
    // Check on page load and scroll
    checkSkillsInView();
    $(window).on('scroll', checkSkillsInView);

    // Menu toggle functionality
    $("#menuToggle").click(function(e) {
        e.stopPropagation();
        $("#theMenu").toggleClass("menu-open");
    });

    // Close menu when clicking outside or on menu links
    $(document).click(function(e) {
        if (!$(e.target).closest('#theMenu, #menuToggle').length) {
            $("#theMenu").removeClass("menu-open");
        }
    });

    // Close menu when clicking on menu links
    $("#theMenu a").click(function() {
        $("#theMenu").removeClass("menu-open");
    });

    // Scroll to top functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    $('#scrollup').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Add scroll effect to sections
    $(window).scroll(function() {
        $('.section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('in-view');
            }
        });
    });

    // Enhanced loading screen with minimum display time
    var loadStartTime = Date.now();
    var minLoadTime = 1500; // Minimum 1.5 seconds
    
    function hideLoader() {
        var loadEndTime = Date.now();
        var loadDuration = loadEndTime - loadStartTime;
        var remainingTime = Math.max(0, minLoadTime - loadDuration);
        
        setTimeout(function() {
            $("#loading").fadeOut(800, function() {
                // Add any additional callback here if needed
            });
        }, remainingTime);
    }
    
    // Hide loader after minimum time
    hideLoader();
});