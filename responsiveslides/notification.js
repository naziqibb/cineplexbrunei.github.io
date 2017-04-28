var myMessages = ['info','warning','error','success'];

function hideAllMessages() {
	var messagesHeights = new Array();
	
	for (i=0; i<myMessages.length; i++) {
	messagesHeights[i] = $('.' + myMessages[i]).outerHeight();
	$('.' + myMessages[i]).css('top', -messagesHeights[i]);
	}
}

function showMessage(type) {

	$('.'+ type +'-trigger').click(function(){
		hideAllMessages();
		$('.'+type).animate({top:"0"}, 500);
	});
}

$(document).ready(function() {

	hideAllMessages();
	
	for(var i=0;i<myMessages.length;i++)
	{
		showMessage(myMessages[i]);
	}
	
	$('.message').click(function() {
		$(this).animate({top: -$(this).outerHeight()}, 500);
	});
}