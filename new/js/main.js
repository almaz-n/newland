
// useragent
var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );

$(document).ready(function () {

    // Позиционирование элемента output относительно range input thumb
    var range, newPoint, newPlace, offset;
    $(".widgets-list input[type='range']").change(function () {
        range = $(this);
        width = range.width();
        // Figure out placement percentage between left and right of input
        newPoint = (range.val() - range.attr("min")) / (range.attr("max") - range.attr("min"));

        offset = -1;

        // Prevent bubble from going beyond left or right (unsupported browsers)
        if (newPoint < 0) {
            newPlace = 0;
        } else if (newPoint > 1) {
            newPlace = width;
        } else {
            newPlace = width * newPoint + offset;
            offset -= newPoint;
        }

        // Move bubble
        range.next("output").css({left: newPlace, marginLeft: offset + "%"}).text((range.attr("max") - range.val()) + ' шт.');
    }).trigger('change');
    
    $('input, textarea').placeholder();

//    $(".widget-robot .chat").customScrollbar({
//        skin: "gray-skin",
//        hScroll: false,
//        updateOnWindowResize: true
//    });

});