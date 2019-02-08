import $ from 'jquery';

$( document ).ready(function() {

    $('#collapse .collapse__btn').click(function() {
       $(this).next().slideToggle();
       $(this).toggleClass('show');
       var tab = $(this).next();
    });

    // $('.collapse').first().find('.collapse__item').show();
    // $('.collapse').first().find('.collapse__btn').addClass('show');
    $('#faq .collapse__btn').click(function() {
        $(this).next().slideToggle();
    		$(this).toggleClass('show');
    		var tab = $(this).next();
    		$("#faq .collapse__item").not(tab).slideUp();
    		$("#faq .collapse__btn").not(this).removeClass('show');
    });
    
});