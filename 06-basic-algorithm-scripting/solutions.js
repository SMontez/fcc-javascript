
function makeClass(){
	"use strict";

	class TempCon
	{
	    constructor(temp, scale){
	    	this.temp = temp;
	    }

		if (scale == "C")
	    {
	    	set fahrenheit(this.temp)
	    	{
	      		5 / 9 * (this.temp - 32);
	    	}
	    }

		if (scale == "F")
		{
			set celcius(this.temp)
			{
	      		this.temp * 9.0 / 5 + 32;
	      	} 		
	    }
  		return TempCon;
	}

	/* - This code needs to be moved outside of the function to be used
		const TempCon = makeClass();
		const Fdeg = new TempCon(76,"F"); // setting in Fahrenheit scale
		console.log("Fahrenheit: " + Fdeg);
	*/
}

function factorialize(num){
	if (num === 0)
	{
		return 1;
	}
	return factorialize(num - 1) * num;
}

function findLongestWordLength(str){
	let words = str.split(" ");
	let longWord = 0;

	for(let i = 0; i < words.length; i++)
	{
		if (words[i].length > longWord){
			longWord = words[i].length;
		}
	}
	return longWord;
}

function largestOfFour(arr){
	let myArr = [];
	for (let i = 0; i < arr.length; i++)
	{
		let litArr = arr[i];
		var hiVal = litArr[0];

		for(let x = 0; x < litArr.length; x++)
		{
			if (litArr[x] > hiVal)
			{
				hiVal = litArr[x];
			}
		}  
		myArr.push(hiVal);
	}
	return myArr;
}

function confirmEnding(str, target) {
    target = "/" + target + "$/";
    console.log(target);
    return target.test(str);
}

function findElement(arr, func) {
	let num = 0;

	while (num < arr.length)
	{
		num++;
		console.log(func(arr[num]));
		if (func(arr[num]))
		{
			return arr[num];
		}
	}
	return undefined;
}

function frankenSplice(arr1, arr2, n) {
  let myArr = [];
  myArr = arr2.slice();
  myArr.splice(n,0,...arr1);
  return myArr;

  /*
  		How to call : Sample Code Below - move this code out of the function to use it
		frankenSplice([1, 2, 3], [4, 5, 6], 1);
  */

}

