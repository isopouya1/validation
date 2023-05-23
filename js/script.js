$(document).ready(function () {

  $('#eyeClose').css('display', 'none');

  $('#eyeToggle').click(function () {
    if($('#password').val() != ''){
      if ($('#password').attr('type') === 'password') {
        $('#password').attr('type','text');
        $('#eyeOpen').css('display', 'none');
        $('#eyeClose').css('display', 'block');
      }
      else if ($('#password').attr('type') === 'text') {
        $('#password').attr('type','password');
        $('#eyeOpen').css('display', 'block');
        $('#eyeClose').css('display', 'none');
      }
    }
    
    
  });
  let status = false;
  $("#form").submit(function (ev) {

    ev.preventDefault()

    const name = $('#fullname');
    const user = $('#username');
    const pass = $('#password');
  

    if (name.val() == '') {
      $('#fullNameBox').text('Please Fill Fullname!')
      status = false;
    } else {
      $('#fullNameBox').text('');
      status = true;
    }

    if (user.val() == '') {
      $('#emailErrBox').text('Please Fill Email!')
      status = false;
    } else {
      $('#emailErrBox').text('');
      status = true;
    }


    if (pass.val() == '') {
      $('#passwordErrBox').text('Please Fill Password!')
      status = false;
    } else {
      $('#passwordErrBox').text('');
      status = true;
      $('#formTitle').text(`Hey welcome ${name.val()}`)
    }

    if (status == true) {
      $('form').fadeOut(500);
      $('.wrapper').addClass('form-success');
    }
  });
  });



