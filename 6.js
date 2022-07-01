let array =  [1, 1, 1, 1, 4];
var ident = true;
for (var i = 0; i < array.length; i++) {
	for (var j = 0; j < array.length; j++){
		if(array[i] != array[j]){
			ident = false;
		}
	}
}
console.log(ident);