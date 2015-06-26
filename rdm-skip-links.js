!function($) {
    'use strict';

    if ($('.skip').length) {
        inintializeSkipLinks();
    }

    function inintializeSkipLinks() {
        $('.skip').each(function () {
            var $el = $(this);
            $el.on('click', skipIt);
        });
    }

    function skipIt(e) {
        e.preventDefault();

        var target = $(this).data('target'),
            offset = $(this).data('offset');
        offset = (typeof offset === 'undefined') ? '0' : offset + 'px';
        target = (target === 'top') ? 'html' : target;

        $(target).velocity('scroll', { offset: offset, duration: 800 });
    }
}(jQuery);
