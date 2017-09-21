'use strict';
window.onload = function(){
	const inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
 const  boss = printReceipt(inputs);
 // $.post('127.0.0.1:2017/receipt/print',boss,function(data,status){
 // 	console.log(status);
 // },'text');
 console.log(boss);
 $.ajax({
 	 url:"127.0.0.1:2017/print_demo",
     type:"post",
     data:boss,
     success:function(data){
     	console('over...');
     },
     error:function(e){
     	console.log(e.message);
     }
 })
}
function printReceipt(inputs) {
	let str = '***<没钱赚商店>收据***\n';
	const a = loadAllItems();
    let allPrice = 0;
	let arr = [],k = 0;
	let count = 1;
	let n,sum = 0,save;
	const b = loadPromotions();
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
  return str;
}