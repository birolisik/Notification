$(document).ready(function () {
  // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
  $('#noti_Counter')
      .css({ opacity: 0 })
      .text('7')      // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
      .css({ top: '-10px' })
      .animate({ top: '-2px', opacity: 1 }, 500);

  $('#noti_Button').click(function () {

      // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
      $('#notifications').fadeToggle('fast', 'linear', function () {
          if ($('#notifications').is(':hidden')) {
              $('#noti_Button').css('background-color', '#00000');
          }
          // CHANGE BACKGROUND COLOR OF THE BUTTON.
          else $('#noti_Button').css('background-color', '#00000');
      });

      //$('#noti_Counter').fadeOut('slow');     // HIDE THE COUNTER.
      $('#noti_Counter').text('0');     // HIDE THE COUNTER.


      return false;
  });

  // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
  $(document).click(function () {
      $('#notifications').hide();

      // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
      if ($('#noti_Counter').is(':hidden')) {
          // CHANGE BACKGROUND COLOR OF THE BUTTON.
          $('#noti_Button').css('background-color', '#00000');
      }
  });

  $('#notifications').click(function () {
    //  return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
  });
  $( "p.bold" ).click(function() {
    alert( "Handler for .click() called." );
  });
});