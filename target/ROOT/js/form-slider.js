$(function() {

    $('#card-transfer').click(function(e) {
        $("#card-pay-form").delay(100).fadeIn(100);
        $("#account-form-pay").fadeOut(100);
        $('#account-transfer').removeClass('active');
        $('#card').setAttribute('checked','true');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#account-transfer').click(function(e) {
        $("#account-form-pay").delay(100).fadeIn(100);
        $("#card-pay-form").fadeOut(100);
        $('#card-transfer').removeClass('active');
        $('#account').setAttribute('checked', 'true');
        $(this).addClass('active');
        e.preventDefault();
    });

});