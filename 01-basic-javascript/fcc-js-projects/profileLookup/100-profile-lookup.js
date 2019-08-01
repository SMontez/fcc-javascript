
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop)
{
	// Only change code below this line
    for(var i = 0; i < contacts.length; i++)
    {
       if(contacts[i].firstName == name)
       {
       		if (contacts[i].hasOwnProperty(prop))
       		{
                console.log("i : " + i + "\t" + contacts[i][prop]);
                return contacts[i][prop];
            }
            else
            {
       			console.log("i : " + i + "\t" + "No such property");
       			return "No such property";
       		}
       }
    }

    console.log("i : " + i + "\t" + "No such contact");
    return "No such contact";

// Only change code above this line
}

lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry","likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");

/*
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop)
{
// Only change code below this line
    for(var i = 0; i < contacts.length; i++)
    {
    
    /*================== IF NAME AND PROPERTY EXISTS ==================*/
/*			        if((contacts[i].firstName == name) && contacts[i].hasOwnProperty(prop))
        {
            
            if (prop == "lastName")                                             //When PROPERTY is LASTNAME
            {
                console.log(name + "'s last name is "+ contacts[i][prop]);
            }

            if (prop == "likes")                                                //When PROPERTY is LIKES
            {
                var strList = "";
                for(var x = 0; x < contacts[i][prop].length-1; x++)                     //Iterate through each item in likes sub-array
                {
                    strList += contacts[i][prop][x] + ", ";                             //Provide commas and spacing to each array item
                }
                strList += "and " + contacts[i][prop][x] + ". ";                        //Provide 'and' and period to last array item
                console.log(name + " likes " + strList);
            }

            if (prop == "number")                                               //When PROPERTY is NUMBER
            {
                var pNum = JSON.stringify(contacts[i][prop]);
                var phoneNumber = "(" + pNum.substr(1,3)                                //Parse Area Code
                                + ")" + pNum.substr(4,3)                                //Parse Prefix
                                + "-" + pNum.substr(7,4);                               //Parse Last 4
                console.log(name + "'s phone number is " + phoneNumber);
            }

            return contacts[i][prop];                                           
        }
*/
    
    /*=========== IF NAME EXISTS BUT PROPERTY DOES NOT EXIST ===========*/
/*			        if((contacts[i].firstName == name) && !contacts[i].hasOwnProperty(prop))
        {
            console.log("No such property");
            return "No such property";
        }
    }
    console.log("No such contact");
    return "No such contact";                                                   //If NAME does NOT EXIST, RETURN
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "number");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");
*/

