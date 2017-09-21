'use strict';
// function printReceipt(inputs) {
// 	let str = '***<没钱赚商店>收据***\n';
// 	let allPrice = 0;
// 	let arr = [];
// 	for(let i = 0;i<inputs.length;i++){
// 		arr.push('名称：' + inputs[i].name + '，数量：' 
// 			+ inputs[i].count + inputs[i].unit + '，单价：' + inputs[i].price.toFixed(2) + '(元)，小计：' 
// 			+ (inputs[i].count*inputs[i].price).toFixed(2) + '(元)\n');
// 		str += arr[i];
// 		allPrice += inputs[i].count*inputs[i].price;
// 	}
// 	str += '----------------------\n总计：' + allPrice.toFixed(2) + '(元)\n**********************';
// 	console.log(str);
// }
function printReceipt(inputs) {
	let str = '***<没钱赚商店>收据***\n';
	let allPrice = 0;
	for(let i = 0;i<inputs.length;i++){
		str += '名称：' + inputs[i].name + '，数量：' 
			+ inputs[i].count + inputs[i].unit + '，单价：' + inputs[i].price.toFixed(2) + '(元)，小计：' 
			+ (inputs[i].count*inputs[i].price).toFixed(2) + '(元)\n';
		allPrice += inputs[i].count*inputs[i].price;
	}
	str += '----------------------\n总计：' + allPrice.toFixed(2) + '(元)\n**********************';
	console.log(str);
}
