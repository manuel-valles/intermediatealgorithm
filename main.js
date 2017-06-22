
// SUM ALL NUMBERS IN A RANGE
function sumAll(arr) {
	var sum = 0;
	// YOU CAN DO IT WITH MAX AND MIN INSTEAD:
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