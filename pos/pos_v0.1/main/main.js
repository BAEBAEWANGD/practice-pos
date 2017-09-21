'use strict';

// function printReceipt(inputs) {
// 	let str = '***<没钱赚商店>收据***\n';
// 	let allPrice = 0;
//     let count = 1;
// 	let arr = [],k=0;
// 	for(let i = 0; i < inputs.length - 1; i++){//不能越界，其长度应为length-1

// 		if (inputs[i].name == inputs[i + 1].name){

// 			count ++ ;

// 		} else{

// 			arr.push(inputs[i] + {'count ':count});
// 			count = 1; //归一化
// 			str += '名称：' + arr[k++].name + '，数量：' 
// 			+ arr[k++].count + arr[k++].unit + '，单价：' + arr[k++].price.toFixed(2) + '(元)，小计：' 
// 			+ (arr[k++].count*arr[k++].price).toFixed(2) + '(元)\n';
// 			allPrice += arr[k++].count*arr[k++].price;
// 		}
// 	}
	// str += '----------------------\n总计：' + allPrice.toFixed(2) + '(元)\n**********************';
	// console.log(str);
// }
// 
// 
// 
function printReceipt(inputs){

	let arr = [],k = 0;
	let count = 1;
	let str = '***<没钱赚商店>收据***\n';
	let allPrice = 0;

	for(let i = 1;i < inputs.length; i++){
		if (inputs[i - 1].name == inputs[i].name){

			count++;
			
		} else{
			allPrice += count * inputs[i - 1].price;
			arr.push('名称：' + inputs[i - 1].name + '，数量：' 
		    + count + inputs[i - 1].unit + '，单价：' + inputs[i - 1].price.toFixed(2) + '(元)，小计：' 
 			+ (count * inputs[i - 1].price).toFixed(2) + '(元)\n');

 			count = 1;
 			str += arr[k++];
		}
	}
	if(inputs[inputs.length - 1].name != inputs[inputs.length - 2].name){

			arr.push('名称：' + inputs[inputs.length - 1].name + '，数量：' 
		    + count + inputs[inputs.length - 1].unit + '，单价：' + inputs[inputs.length - 1].price.toFixed(2) + '(元)，小计：' 
 			+ (count * inputs[inputs.length - 1].price).toFixed(2) + '(元)\n')
 			str += arr[k++];
 			allPrice += count * inputs[inputs.length - 1].price;

		}
	str += '----------------------\n总计：' + allPrice.toFixed(2) + '(元)\n**********************';
	console.log(str);
}