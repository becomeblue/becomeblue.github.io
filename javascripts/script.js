$(document).ready(function() {

// Robo Language 1.0
    $('#robo-button').click(function() {
        $('#robo').animate({top:'-=80px'},'slow');
        $('#robo').animate({top:'+=80px'},'slow');
        $('#robo').animate({left:'+=80px'},'slow');
        $('#robo').animate({left:'-=80px'},'slow');
    });

// Level 1
    $("#level1up").click(function() {
        $(".list").append('<img id="up" src="https://raw.githubusercontent.com/compscinz/compscinz.github.io/update/images/ch1/go_1.0_step_forward.png" alt="go_1.0_step_forward">');
    });
    $(document).on("click", "#up", function() {
        $(this).remove();
    });
    $("#level1down").click(function() {
        $(".list").append('<img id="down" src="https://raw.githubusercontent.com/compscinz/compscinz.github.io/update/images/ch1/go_1.0_step_backward.png" alt="go_1.0_step_backward">');
    });
    $(document).on("click", "#down", function() {
        $(this).remove();
    });
    $("#level1right").click(function() {
        $(".list").append('<img id="right" src="https://raw.githubusercontent.com/compscinz/compscinz.github.io/update/images/ch1/go_1.0_turn_right.png" alt="go_1.0_turn_right">');
    });
    $(document).on("click", "#right", function() {
        $(this).remove();
    });
    $("#level1left").click(function() {
        $(".list").append('<img id="left" src="https://raw.githubusercontent.com/compscinz/compscinz.github.io/update/images/ch1/go_1.0_turn_left.png" alt="go_1.0_turn_left">');
    });
    $(document).on("click", "#left", function() {
        $(this).remove();
    });

// Interactive terminal elements
/* Notes: This needs to be amalgamated into a class or object as the repetition in code is ridiculous */
    $('#code').hide();
    $('#run').click(function() {
        $('#code').fadeIn('slow');
    });
    $('#reset').click(function() {
        $('#code').fadeOut('fast');
    });

    $('#code1').hide();
    $('#run1').click(function() {
        $('#code1').fadeIn('slow');
    });
    $('#reset1').click(function() {
        $('#code1').fadeOut('fast');
    });

    $('#code2').hide();
    $('#run2').click(function() {
        $('#code2').fadeIn('slow');
        $('#robo2').animate({left:'+=80px'},'slow');
        $('#robo2').animate({top:'+=80px'},'slow');
        $('#robo2').animate({top:'+=80px'},'slow');
        $('#robo2').animate({top:'+=80px'},'slow');
        $('#robo2').animate({left:'+=80px'},'slow');
    });
    $('#reset2').click(function() {
        $('#code2').fadeOut('fast');
        $('#robo2').animate({left:'-=80px'},0);
        $('#robo2').animate({top:'-=80px'},0);
        $('#robo2').animate({top:'-=80px'},0);
        $('#robo2').animate({top:'-=80px'},0);
        $('#robo2').animate({left:'-=80px'},0);
    });

    $('#code3').hide();
    $('#run3').click(function() {
        $('#code3').fadeIn('slow');
    });
    $('#reset3').click(function() {
        $('#code3').fadeOut('fast');
    });

    $('#code4').hide();
    $('#run4').click(function() {
        $('#code4').fadeIn('slow');
    });
    $('#reset4').click(function() {
        $('#code4').fadeOut('fast');
    });

    $('#code5').hide();
    $('#run5').click(function() {
        $('#code5').fadeIn('slow');
    });
    $('#reset5').click(function() {
        $('#code5').fadeOut('fast');
    });

    $('#code6').hide();
    $('#run6').click(function() {
        $('#code6').fadeIn('slow');
    });
    $('#reset6').click(function() {
        $('#code6').fadeOut('fast');
    });

    $('#code7').hide();
    $('#run7').click(function() {
        $('#code7').fadeIn('slow');
    });
    $('#reset7').click(function() {
        $('#code7').fadeOut('fast');
    });

    $('#code8').hide();
    $('#run8').click(function() {
        $('#code8').fadeIn('slow');
    });
    $('#reset8').click(function() {
        $('#code8').fadeOut('fast');
    });

    $('#code9').hide();
    $('#run9').click(function() {
        $('#code9').fadeIn('slow');
    });
    $('#reset9').click(function() {
        $('#code9').fadeOut('fast');
    });

    $('#code10').hide();
    $('#run10').click(function() {
        $('#code10').fadeIn('slow');
    });
    $('#reset10').click(function() {
        $('#code10').fadeOut('fast');
    });

    $('#code11').hide();
    $('#run11').click(function() {
        $('#code11').fadeIn('slow');
    });
    $('#reset11').click(function() {
        $('#code11').fadeOut('fast');
    });

    $('#code12').hide();
    $('#run12').click(function() {
        $('#code12').fadeIn('slow');
    });
    $('#reset12').click(function() {
        $('#code12').fadeOut('fast');
    });

    $('#code13').hide();
    $('#run13').click(function() {
        $('#code13').fadeIn('slow');
    });
    $('#reset13').click(function() {
        $('#code13').fadeOut('fast');
    });

    $('#code14').hide();
    $('#run14').click(function() {
        $('#code14').fadeIn('slow');
    });
    $('#reset14').click(function() {
        $('#code14').fadeOut('fast');
    });

    $('#code15').hide();
    $('#run15').click(function() {
        $('#code15').fadeIn('slow');
    });
    $('#reset15').click(function() {
        $('#code15').fadeOut('fast');
    });

    $('#code16').hide();
    $('#run16').click(function() {
        $('#code16').fadeIn('slow');
    });
    $('#reset16').click(function() {
        $('#code16').fadeOut('fast');
    });

    $('#code17').hide();
    $('#run17').click(function() {
        $('#code17').fadeIn('slow');
    });
    $('#reset17').click(function() {
        $('#code17').fadeOut('fast');
    });

    $('#code18').hide();
    $('#run18').click(function() {
        $('#code18').fadeIn('slow');
    });
    $('#reset18').click(function() {
        $('#code18').fadeOut('fast');
    });

    $('#code19').hide();
    $('#run19').click(function() {
        $('#code19').fadeIn('slow');
    });
    $('#reset19').click(function() {
        $('#code19').fadeOut('fast');
    });

    $('#code20').hide();
    $('#run20').click(function() {
        $('#code20').fadeIn('slow');
    });
    $('#reset20').click(function() {
        $('#code20').fadeOut('fast');
    });

    $('#code21').hide();
    $('#run21').click(function() {
        $('#code21').fadeIn('slow');
    });
    $('#reset21').click(function() {
        $('#code21').fadeOut('fast');
    });

    $('#code22').hide();
    $('#run22').click(function() {
        $('#code22').fadeIn('slow');
    });
    $('#reset22').click(function() {
        $('#code22').fadeOut('fast');
    });

    $('#code23').hide();
    $('#run23').click(function() {
        $('#code23').fadeIn('slow');
    });
    $('#reset23').click(function() {
        $('#code23').fadeOut('fast');
    });

    $('#code24').hide();
    $('#run24').click(function() {
        $('#code24').fadeIn('slow');
    });
    $('#reset24').click(function() {
        $('#code24').fadeOut('fast');
    });
});
