//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = 'Brandon Boehlke'
me.age = 26
me['hair color'] = 'brown'

//2. Iterate over the object to console.log the propery or key names. 
var numCount = 0
for (i = 0; i < Object.keys(me).length; i++){
console.log(Object.keys(me)[i])
}

/*
function getKeyValues(obj){
	for (var key in obj)
	console.log(key)
}
getKeyValues(me)

*/
