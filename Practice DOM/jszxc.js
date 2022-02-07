$(function(){

  $(document).on('click', '#register_but', function () {
            var name = $('#username_reg').val();
            var password = $('#password_reg').val();
            var password_rep = $('#password_dup_reg').val();

            if(password != password_rep){
                $('.hidden-error-block').html('The entered passwords do not match').css('color', 'red');
                return false;
            }
            else if(password.length < 1){
                $('.hidden-error-block').html('Enter the password').css('color', 'red');
                return false;
            }
            else if(name == ''){
                $('.hidden-error-block').html('Enter your name').css('color', 'red');
                return false;
            }
            else if(password == password_rep){
                 $('.hidden-error-block').html('Good').css('color', 'green');
            }else{
                $('.hidden-error-block').html('Password does not match the requirements').css('color', 'red');
            }
        });

  $('#password_dup_reg').keyup(function () {
        var pas = $('#password_reg').val();
        var con_pas = $(this).val();
        if(pas === con_pas){
            $('.register_inp').css('border-color', 'green');
        }else{
            $('.register_inp').css('border-color', 'red');
        }
    });
    $('#password_reg').keyup(function () {
        var pswd = $('#password_reg').val();
        if ( pswd.length < 1 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
    }).focus(function() {
        $('#pswd_info').show(500);
    }).blur(function() {
        $('#pswd_info').hide(500);
    });
});
