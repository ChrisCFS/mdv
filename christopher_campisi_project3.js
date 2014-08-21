var text = '{"name":"Christopher Campisi","class":"SDI: 1408","date":"Aug 21st 2014"}'

var obj = JSON.parse(text);

console.log(text);
console.log(obj);

document.getElementById("myInfo").innerHTML =
obj.name + "<br>" +
obj.class + "<br>" +
obj.date;