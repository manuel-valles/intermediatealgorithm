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


// ROMAN NUMERAL CONVERTER
function convertToRoman2(num) {
 	var romanNum = '',
	decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
	romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	for (var i = 0; i < decimals.length; i++) {
		while (num >= decimals[i]) {
		    romanNum += romans[i];
		    num -= decimals[i];
		}
	}
    return romanNum;
}

$("#buttonRoman").click(function() {
	var number = parseInt($("#number").val());
	$("#resultRoman").val(convertToRoman2(number));
});


// WHEREFORE ART THOU
function whatIsInAName(collection, source) {
  var arr = [];
  collection.filter(function(element) {
  	for (var key in source){
  		if (source[key] != element[key]){
  			return false;
  		}
  	}
    return arr.push(element);
  });
  return arr;
}
// There is some invalid JSON format. With ONLY JSON would be:
// var romeo = JSON.parse($("#arr3").val());
// var juliet = JSON.parse($("#obj1").val());

// Unquoted JSON isn't JSON - 
// The JSON spec requires that strings are quoted (with double quotes, not single quotes).
// If you have JSON with unquoted strings what you actually have is just plain JavaScript. 
// So run eval() on it. kbvar obj = eval('(' + invalid_json + ')');

$("#romeoJuliet").click(function() {
	invalid_json = $("#arr3").val();
	invalid_json2 = $("#obj1").val();
	var romeo = eval('(' + invalid_json + ')');
	var juliet = eval('(' + invalid_json2 + ')');
	$("#resultFamily").val(JSON.stringify(whatIsInAName(romeo, juliet)));
});


// SEARCH AND REPLACE
function myReplace(str, before, after) {
	if( before[0] === before[0].toUpperCase()){
      after = after.split('');
      after[0] = after[0].toUpperCase();
      after = after.join('');
  	}
  str= str.replace(before, after);
  return str;
}
// An easier way with charAt function
function myReplace(str, before, after) {
	if( before.charAt(0) === before.charAt(0).toUpperCase()){
      after = after.charAt(0).toUpperCase() + after.slice(1);
  	}
  str = str.replace(before, after);
  return str;
}

$("#search").click(function() {
	$("#replace").val(myReplace($("#string").val(),$("#before").val(),$("#after").val()));
});


// PIG LATIN
function translatePigLatin(str) {
	var vowels = ["a","e", "i", "o","u"];
	if(vowels.indexOf(str.charAt(0)) !== -1){
		str += "way";
	} else{
		if(vowels.indexOf(str.charAt(1)) !==-1){
			str = str.slice(1)+str.charAt(0)+'ay';
		} else{
			str = str.slice(2)+str.slice(0,2)+'ay';
		}
	}
  	return str;
}

$("#translate").click(function() {
	$("#pigWord").val(translatePigLatin($("#originalWord").val()));
});

// DNA PAIRING
function pairElement(str) {
	var at = ["A", "T", "A"];
	var cg = ["C","G", "C"];
	var arr = [];
	str = str.split('');
	str.forEach( function(element, index) {
		if(cg.includes(element)){
			arr.push([(element), cg[cg.indexOf(element)+1]]);
		} else if(at.includes(element)){
			arr.push([(element), at[at.indexOf(element)+1]]);
		}
	});
  return arr;
}
// Shorter Option with an object
function pairElement(str) {
	var pairs = {A:'T', T:'A', C:'G', G:'C'};
	// Map method to create the new array
	var arr = str.split('').map(function(item) {
		return [item, pairs[item]];
	});
	return arr;
}
// console.log(pairElement("GCG"));
$("#fixIt").click(function() {
	// stringify for displaying the array, not a string.
	$("#array2d").val(JSON.stringify(pairElement($("#strand").val())));
});