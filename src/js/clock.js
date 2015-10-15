var getDateSuffix = function(date) {
    var strDate = date.toString();
    var oneRate = strDate.charAt(strDate.length - 1)
    switch (Number(oneRate)) {
    case 1:
	return 'st'
    case 2:
	return 'nd'
    case 3:
	return 'rd'
    default:
	return 'th'
    }
    console.error('Unknown date:' + date);
}

var getDayString = function(day) {
    switch (day) {
    case 1:
	return 'Monday'
    case 2:
	return 'Tuesday'
    case 3:
	return 'Wednesday'
    case 4:
	return 'Thursday'
    case 5:
	return 'Friday'
    case 6:
	return 'Saturday'
    case 7:
	return 'Sunday'
    default:
	console.error('Unknown day:' + day);
    }
}

$(function(){
    // Update Clock
    setInterval(function() {
	var now = new Date();
	var date = now.getDate();
	var dateMsg = getDayString(now.getDay()) + " the " + date + getDateSuffix(date);
	var timeMsg = ('0' + now.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2);

	$('.date').html(dateMsg);
	$('.time').html(timeMsg);
    }, 1000);
});
