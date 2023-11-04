$(document).ready(function() {
    // Navbar background color change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.navbar').addClass('navbarDark');
        } else {
            $('.navbar').removeClass('navbarDark');
        }
    });

    // Collapse navbar after click on small devices
    $('.nav-item').on('click', function() {
        $('#navbarSupportedContent').collapse('hide');
    });

    // Add animation to timeline section when scrolled into view
    $(window).scroll(function() {
        var timelineTop = $('#timeline').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        if (timelineTop < scrollTop + windowHeight - 100) {
            $('.timeline-item').addClass('animate');
        }
    });

    // Add hover effect to individual timeline events
    $('.timeline-item').hover(
        function() {
            $(this).find('.timeline-content').addClass('hover');
        },
        function() {
            $(this).find('.timeline-content').removeClass('hover');
        }
    );
});
