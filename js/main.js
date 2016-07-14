
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

//    range
    $( function() {
        $( "#slider-range-min" ).slider({
            range: "min",
            value: 60,
            min: 0,
            max: 100,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value + "%");
            }
        });
        $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + ("%"));
    } );

    $( function() {
        $( ".select_text_color" ).change(function(){
            $('.result_text_color').append($(".select_text_color").val());
        })
    } );

    $('.arrow').click(function(){
        $(".widget_dinamic").toggle();
    });

    //устанавливаем код
    var installCode = $('#install');

    installCode.click(function(){
        $(this).replaceWith("<span id='installing'>(установлено)<span>");
    });

    //открытие виджетов
    var openWiget = $('#set_widget');
    var image = $('.open_widget_image');
    var vk = $('.open_widget_vk');
    var robot = $('.open_widget_robot');

    openWiget.click(function(){
        $(".widget_vk").hide();
        $(".widget_robot").hide();
        $(".widget_img").hide();
        $("#widgets").toggle();
    });

    image.click(function(){
        $(".widget_robot").hide();
        $(".widget_vk").hide();
        $(".widget_img").toggle();

        $('.check_image').addClass('.checkbox:checked + label:before');
    });

    vk.click(function(){
        $(".widget_robot").hide();
        $(".widget_img").hide();
        $(".widget_vk").toggle();
    });

    robot.click(function(){
        $(".widget_vk").hide();
        $(".widget_img").hide();
        $(".widget_robot").toggle();
    });

    $("#about_widget_img").click(function(){
            $(".about_widget_img").show();
    });

});