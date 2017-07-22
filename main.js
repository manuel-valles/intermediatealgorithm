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
	// In case the input is in lowercase.
	var strand = $("#strand").val().toUpperCase();
	// stringify for displaying the array, not a string.
	$("#array2d").val(JSON.stringify(pairElement(strand)));
});


// MISSING LETTERS
function fearNotLetter(str) {
	for (var i = 0; i < str.length-1; i++) {
		if(str.charCodeAt(i)+1 != str.charCodeAt(i+1)){
			return String.fromCharCode(str.charCodeAt(i)+1);
		}
	}
	// Undefined has been modified to string for the purpose of the display.
	// It should be: return undefined;
	return "undefined";
}
// console.log(fearNotLetter("abcdefghjklmno"));
// console.log(fearNotLetter("bcd"));
$("#findIt").click(function() {
	$("#letterFound").val(fearNotLetter($("#letterRange").val()));
});


// BOO WHO
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (bool === true || bool === false);
}
//Another simple option:
function booWho(bool) {
  return typeof bool === "boolean";
}

// booWho(null);
$("#checkIt").click(function() {
	var input = $("#anyValue").val();
	var bbool = eval(input);
	$("#trueFalse").val(booWho(bbool));
	// console.log(typeof bbool, bbool);
});



// SORTED UNION
// ES6 has been modified for the correct display. It should be:
// function uniteUnique(...arr){
function uniteUnique(arr) {
	var newArr = [];
	arr.forEach( function(element, index) {
		element.forEach( function(element2, index2) {
			if(!newArr.includes(element2)){
				newArr.push(element2);
			}
		});
	});
  return newArr;
}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
$("#sortIt").click(function() {
	var originalArr = $("#originalArray").val();
	originalArr = JSON.parse('[' + originalArr + ']');
	$("#finalArray").val(JSON.stringify(uniteUnique(originalArr)));
});



// CONVERT HTML ENTITIES
function convertHTML(str) {
  // &colon;&rpar;
  var entities = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '\"':'&quot;', '\'':'&apos;'};
  return str.split('').map(function(char) {
  	// This will return one of these options. If it's undefined/not there, it will give a falsy value.
  	return entities[char] || char;
  }).join('');
}
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
$("#convertIt").click(function() {
	var stringTo = $("#stringTo").val();
	$("#htmlEnt").val(convertHTML(stringTo));
});

// SPINAL TAP CASE
function spinalCase(str) {
  // $1 and $2 represents the groups in parenthesis.
  // | represents the OR conditional
  // \s for spaces
  // g always for global
	return str.replace(/([a-z])([A-Z])|\s|_/g, '$1'+'-'+'$2').toLowerCase();
}
// console.log(spinalCase('This Is Spinal Tap'));
$("#spinalIt").click(function() {
	var originalString = $("#originalString").val();
	$("#finalString").val(spinalCase(originalString));
});


// SUM ALL ODD FIBONACCI NUMBERS
function sumFibs(num) {
	var prevNumber = 0;
    var currNumber = 1;
    var sum = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            sum += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return sum;
}
// console.log(sumFibs(1000));
$("#buttonFibo").click(function() {
	var yourNumber = $("#yourNumber").val();
	$("#yourFibo").val(sumFibs(yourNumber));
});


// SUM ALL PRIMES
function sumPrimes(num) {
	var primeNumbers = [];
	// loop from 2 to the included number
	// We need to check every time if the number is prime (function - isPrimeNumber)
	for (var j=2; j<=num; j++){
		// If true, include that number
		if(isPrimeNumber(j)){
			primeNumbers.push(j);
		}
	}
	//Sum all the numbers of the primeNumbers array
	return primeNumbers.reduce(function(a,b){
		return a+b;
	});
}
function isPrimeNumber (num) {
	// 2 is the first prime number, and we don't need the number itself
	// Result is gonna be true or false.
	for (var i=2; i<num; i++){
		if (num%i===0){
			return false;
		}
	}
	return true;
}
// console.log(sumPrimes(977));
$("#buttonPrime").click(function() {
	var givenNumber = $("#givenNumber").val();
	$("#yourPrime").val(sumPrimes(givenNumber));
});


// SMALLEST COMMON MULTIPLE
function smallestCommons(arr) {
	// Not always in order.
	arr.sort();
	// New array with all numbers between these min and max.
	var range = [];
	for (var i=arr[0]; i<=arr[1]; i++){
		range.push(i);
	}
	a = range [0];
	// Using Euclid’s Algorithm
	for (var j=1; j<range.length; j++){
		b = range[j];
		c = a;
		// while a and b are not equal 0
		while (a&&b) {
			if(a>b){
				a%=b;
			} else{
				b%=a;
			}
		}
		a = c*range[j]/(a+b);
	}
	return a;
}
// console.log(smallestCommons([23, 18]));
$("#lcm").click(function() {
	var twoNum= eval($("#twoNum").val());
	$("#commonMultiple").val(smallestCommons(twoNum));
});


// FINDERS KEEPERS
function findElement(arr, func) {
  return arr.filter(func)[0];
}
// console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
$("#truth").click(function() {
	var arr = eval($("#userArray").val());
	// Function object needed because the user can change the statement.
	var state = new Function("num", "return num"+$("#statement").val());
	// ""+object or String() needed to transform undefined to "undefined"
	$("#firstElement").val(String(findElement(arr, state)));
});


// DROP IT
function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
$("#dropButton").click(function() {
	var arr = eval($("#userArr").val());
	var state = new Function("num", "return num"+$("#state").val());
	$("#resultArr").val(JSON.stringify(dropElements(arr, state)));
});


// STEAMROLLER
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(acc, curr){
  	return acc.concat(Array.isArray(curr) ? steamrollArray(curr) : curr);
  },[]);
}
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
$("#flattener").click(function() {
	var arr = eval($("#normalArray").val());
	$("#flatArray").val(JSON.stringify(steamrollArray(arr)));
});


// BINARY AGENTS
// We need to parse that binary to decimal to be able to use fromCharCode method.
// console.log(String.fromCharCode(97));
// console.log("a".charCodeAt());
// var binary = "1101000" // code for 104 in decimal
// var decimal = parseInt(binary, 2);
function binaryAgent(str) {
	return str.split(' ').map(function(bin){
		return String.fromCharCode(parseInt(bin,2));
	}).join('');
}
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
$("#translator").click(function() {
	$("#english").val(binaryAgent($("#binary").val()));
});