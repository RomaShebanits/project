$(document).ready(function(){
})

$('.menu-item').click(function(){

    $('.menu-item').removeClass('active');
    $(this).addClass('active');

    const clickSection = $(this).data('section');
    $('section').removeClass('show')
    $(`section#${clickSection}`).addClass('show');

    $('.head .menu').removeClass('show-menu');
})

$('.head .menu-btn').click(function(){
    $('.head .menu').toggleClass('show-menu');
});