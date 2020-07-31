{jQuery('html,body').animate({ scrollTop:0}, 'fast'); return false})
            )
        );
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.pagetop').fadeIn();
        } else {
            jQuery('.pagetop').fadeOut();
        }
    });
});

