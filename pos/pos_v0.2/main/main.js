'use strict';

function printReceipt(inputs) {
	let str = '***<没钱赚商店>收据***\n';
	const a = loadAllItems();
    let allPrice = 0;
	let arr =[],k = 0;
	let count = 1;
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < inputs.length - 1; j++){
			if(inputs[j] == inputs[j + 1] && a[i].barcode == inputs[j]){
				count++;
			}else if(a[i].barcode == inputs[j]){
				allPrice += count * a[i].price;
				arr.push('名称：' + a[i].name + '，数量：' 
		    + count + a[i].unit + '，单价：' + a[i].price.toFixed(2) + '(元)，小计：' 
 			+ (count * a[i].price).toFixed(2) + '(元)\n');
				count = 1;
				str += arr[k++];

			}
		}
		if(inputs[inputs.length - 1] != inputs[inputs.length - 2] && 
				a[i].barcode == inputs[inputs.length - 1]){
			allPrice += count * a[i].price;
				arr.push('名称：' + a[i].name + '，数量：' 
		    + count + a[i].unit + '，单价：' + a[i].price.toFixed(2) + '(元)，小计：' 
 			+ (count * a[i].price).toFixed(2) + '(元)\n');
 			str += arr[k++];
			}
	}
  str += '----------------------\n总计：' + allPrice.toFixed(2) + '(元)\n**********************';
  console.log(str);
}
