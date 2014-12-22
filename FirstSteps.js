$(document).ready(function() {
	$('#openTutorialButton').click(function(){
		//tutorialData is a json object which is genereated in the php part of this module
		if(!tutorialData) return false;
		
		var intro = introJs();

		intro.setOptions({
			steps: tutorialData,
			showProgress:true,
			showBullets:false,
			showStepNumbers:false
		});

		intro.start();
	});	
});