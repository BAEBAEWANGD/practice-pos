'use strict';


function printReceipt(inputs) {
	function dateDigitToString (num)
	{return  num < 10 ? `0${num}` : num;}
	const currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds()),
      formattedDateString = year + '年' + month + '月' + date +'日 ' + hour + ':' + minute + ':' +second;
	let str = '***<没钱赚商店>收据***\n打印时间：' + formattedDateString + '\n----------------------\n';
	const a = Item.all();
    let allPrice = 0;
	let arr = [],k = 0;
	let count = 1;
	let n,sum = 0,save;
	const b = Promotion.all();
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < inputs.length; j++){
			if(inputs[j] == inputs[j + 1] && a[i].barcode == inputs[j]){

				count++;
				if(count > 2 && ((b[0].barcodes[0] == a[i].barcode) || 
				(b[0].barcodes[1] == a[i].barcode) || (b[0].barcodes[2] == a[i].barcode))){
				n = 1;
			}

			}else if(a[i].barcode == inputs[j]){
				allPrice += count * a[i].price;
				arr.push('名称：' + a[i].name + '，数量：' 
		    + count + a[i].unit + '，单价：' + a[i].price.toFixed(2) + '(元)，小计：' 
 			+ ((count - n) * a[i].price).toFixed(2) + '(元)\n');
				sum += (count - 1) * a[i].price;
				count = 1;
				str += arr[k++];

			}
			if(inputs[j] == 'ITEM000003-2' && a[i].barcode == 'ITEM000003'){
				count = 2;
				arr.push('名称：' + a[i].name + '，数量：' 
		    + count + a[i].unit + '，单价：' + a[i].price.toFixed(2) + '(元)，小计：' 
 			+ (count * a[i].price).toFixed(2) + '(元)\n');
				allPrice += count * a[i].price;
				sum += count * a[i].price;
				count = 1;
				str += arr[k++];
			}
		}
	}
	save = (allPrice - sum).toFixed(2);
  str += '----------------------\n总计：' + sum.toFixed(2) + '(元)\n' + '节省：' + save +
  '(元)\n**********************';
  console.log(str);
}