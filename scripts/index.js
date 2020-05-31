/**
 * This jquery function effectively 
 */
$(document).ready(() => {
    const preloaderFadeOutTime = 500;

    setTimeout(() => {
        hidePreloader(preloaderFadeOutTime);
    }, 1000);
});

/**
 * Move down with ease
 */
$('#down').click(() => {
    setTimeout(scrollToElement($('#heart')), 100);
});

/**
 * Hide the preloader 500ms post document has loaded
 * @param {Number} timeout Delays duration for fadeout 
 */
function hidePreloader(timeout) {
    const preloader = $('.spinner-wrapper');
    $('.spinner-wrapper').fadeOut(timeout);
}

/**
 * Animates to a specific region of page
 * @param {Object} ele Jquery element to manipulate 
 */
function scrollToElement(ele) {
    $([document.documentElement, document.body]).animate({
        scrollTop: ele.offset().top,
        scrollLeft: ele.offset().left,
    }, 1000);
}