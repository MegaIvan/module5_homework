value = prompt("Enter value");
if(typeof(+value) == 'number') {
	if(isNaN(+value)) {
		console.log('Это не число');
	}
	else {
		if(value % 2 == 0) {
			console.log('Число четное');
		} else {
			console.log('Число нечетное');
		}
	}
} else {
	console.log('Упс, кажется, вы ошиблись');
}
