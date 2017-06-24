
// SUM ALL NUMBERS IN A RANGE
function sumAll(arr) {
	var sum = 0;
	// Other OPTION-Max&Min:
	// var min = Math.min(arr[0],arr[1]);
	// var max = Math.max(arr[0],arr[1]);
	// console.log(typeof min, max);
	// for (var i=min; i<=max; i++) {
	//   sum+=i;
	// }
	arr.sort(function(a,b){
		return a-b;
	});
  	for (var i=arr[0]; i<=arr[1]; i++) {
    	sum+=i;
  	}
  return sum;
}

$("#buttonSum").click(function() {
	var first = parseInt($("#first").val());
	var second = parseInt($("#second").val());
	var array = new Array(first,second);
	$("#resultSum").val(sumAll(array));
});


//DIFF 2 ARRAYS
function diffArray(arr1, arr2) {
	newArr = arr1
                 .filter(x => arr2.indexOf(x) === -1)
                 .concat(arr2.filter(x => arr1.indexOf(x) === -1));
    // console.log(newArr);
	return newArr;
}
// Only for numbers you can use this: arr1 = $("#arr1").val().split(',').map(Number);

$("#buttonDiff").click(function() {
	var str1 = $("#arr1").val().replace(/"/g, '');
	var str2 = $("#arr2").val().replace(/"/g, '');
	var arr1 = str1.split(',');
	var arr2 = str2.split(',');
	$("#resultDiff").val(diffArray(arr1, arr2));
});