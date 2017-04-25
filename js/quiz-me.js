$(document).ready(function() {
	var currentPage = 1;
	$(".meQuestions").hide();
    $(".answerBars").hide();
	$("#meNext").hide();
	$("#meSubmit").hide();
	$("#meQ1").show();

	$("input").click(function() {
		$('input').each(function(){
			if ($(this).is(':checked') ){
				$(this).parent().css({"background-color": "#2C90AE", "color": "#FFFFFF", "border": "1px solid #2C90AE"});
				$(this).parent().hover(
					function(){
						$(this).css({"background-color": "#2C90AE", "color": "#FFFFFF", "border": "1px solid #2C90AE"})
					}, function(){
        				$(this).css({"background-color": "#2C90AE", "color": "#FFFFFF", "border": "1px solid #2C90AE"});
				});
			}else{
				$(this).parent().css({"background-color": "#FFFFFF", "color": "#2C90AE"});
				$(this).parent().hover(
					function(){
						$(this).css({"background-color": "#FFFFFF", "color": "#AC688D", "border": "1px solid #AC688D"})
					}, function(){
        				$(this).css({"background-color": "#FFFFFF", "color": "#2C90AE", "border": "1px solid #2C90AE"});
				});
			}
		});

	});

    $(".meAnswersQ1").click(function() {
        $("#meAnswerBarQ1").show();
		$("#meNext").show();
    });
	$(".meAnswersQ2").click(function() {
        $("#meAnswerBarQ2").show();
		$("#meNext").show();
    });
	$(".meAnswersQ3").click(function() {
        $("#meAnswerBarQ3").show();
		$("#meNext").show();
    });
	$(".meAnswersQ4").click(function() {
        $("#meAnswerBarQ4").show();
		$("#meNext").show();
    });
	$(".meAnswersQ5").click(function() {
        $("#meAnswerBarQ5").show();
		$("#meSubmit").show();
    });
	$("#meNext").click(function() {
		if (currentPage < 4) {
			currentPage++;
			$(".meQuestions").hide();
			$("#meNext").hide();
			$("#meQ" + currentPage).show();
		} else if (currentPage == 4){
			currentPage++;
			$(".meQuestions").hide();
			$("#meQ"+currentPage).show();
			$("#meNext").hide();
		}
	});
});
