$(document).ready(function() {
    $("#quizPage2").hide();
    $("#quizMe-page").hide();

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
