$(document).ready(function() {
    $("#quizPage2").hide();
    $("#quizMe-page").hide();
    $("#meet100").hide();
    $("#individual-profile").hide();
    
    $("#btn-profile").click(function() {
	    $("#meet100").hide();
	    $("#individual-profile").show();
    });
    
    $("#DNA-btn-1").click(function() {
	    $("#quizPage1").hide();
	    $("#meet100").show();
    });

    $("#DNA-btn-2").click(function() {
	    $("#quizPage1").hide();
	    $("#quizPage2").show();
    });

    $("#start_btn").click(function() {
	    $("#quizPage2").hide();
	    $("#quizMe-page").show();
    });

    $("#dropdownTest").hover(
					function(){
						$("#myDropdown").show();
					}, function(){
						$("#myDropdown").show();
				});
	$("#myDropdown").hover(
					function(){
						$("#myDropdown").show();
					}, function(){
						$("#myDropdown").hide();
				});
});
