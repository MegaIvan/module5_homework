let value = '5';
valueType = typeof(value);
switch (valueType) {
	case 'number':
		console.log('This is number');
		break;
	case 'boolean':
		console.log('This is boolean');
		break;
	case 'string':
		console.log('This is string');
		break;
	default:
		console.log('Тип не определен');
}
