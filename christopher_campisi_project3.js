var text = '{"name":"Christopher Campisi","class":"SDI: 1408","date":"Aug 21st 2014", "assignment":"Project 3"}'

var obj = JSON.parse(text);

//displaying the JSON elements at the top of the HTML webpage and at the bottom for the last element.
document.getElementById("myInfo").innerHTML =
	obj.name + "<br><br>" +
	obj.class + "<br><br>" +
	obj.date;

document.getElementById("assign").innerHTML =
	obj.assignment;
	
document.getElementById("completion").innerHTML =
	obj.date + "<br>" +
	obj.name;