var rNums = [
    [1000,"M"],
    [900,"CM"],
    [500,"D"],
    [400,"CD"],
    [100,"C"],
    [90,"XC"],
    [50,"L"],
    [40,"XL"],
    [10,"X"],
    [9,"IX"],
    [5,"V"],
    [4,"IV"],
    [1,"I"]
];

function decToRoman(val)
{
	var remainder = val;
	var whole = 0;
	var strRomNum = "";
	for(var i = 0 ; i < rNums.length ; i++)
	{
	    whole = Math.trunc(remainder / rNums[i][0]);
	    remainder = remainder % rNums[i][0];
	    if (whole > 0)
	    	for(var x = 0; x < whole; x++)
	    		strRomNum += rNums[i][1];
	}

    return strRomNum;
}

var number = 298;
console.log(number + " in Roman Numerals is : " + decToRoman(number));