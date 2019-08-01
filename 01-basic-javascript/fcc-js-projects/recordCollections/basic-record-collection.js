/*
  // Setup
  var collection ={
      "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
          "Let It Rock", 
          "You Give Love a Bad Name" 
        ]
      },
      "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
          "1999", 
          "Little Red Corvette" 
        ]
      },
      "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
      },
      "5439": 
        {
          "album": "ABBA Gold",
      }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  var count = 0;
  // Only change code below this line
  function updateRecords(id, prop, value){
      
    // [=============  UPDATE ARTIST OR ALBUM INFO WITH VALUE  =============] 
      if (((prop == "artist") || (prop == "album")) && (value !== ""))
        collection[id][prop]=value;
      
    // [=======================  FOR TRACK UPDATES   =======================] 
      if (prop == "tracks")
      {
        if (!collection[id].hasOwnProperty(prop))         // << Verify Tracks Array Property Exists Before Adding Tracks >>
          collection[id][prop] = [];

        if (value !== "")                                 // << Add a Track to the Tracks Array >>
          collection[id][prop].push(value);
      }

    // [=========  REMOVE PROPERTIES WHO'S VALUE HAS BEEN CLEARED  =========] 
      if (value == "")
        delete collection[id][prop];
     
      return collection;
  }

    //Alter values below to test your code
  
    updateRecords(5439, "artist", "ABBA");
    updateRecords(5439, "tracks", "Take a Chance on Me");
    updateRecords(2548, "artist", "");
    updateRecords(1245, "tracks", "Addicted to Love");
    updateRecords(2468, "tracks", "Free");
    updateRecords(2548, "tracks", "");
    updateRecords(1245, "album", "Riptide");

    console.log(collection);
  
*/

// VERSION 2 WITH RUSH ADDITION

  // Setup
  
    var collection = {
      "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [ 
          "Let It Rock", 
          "You Give Love a Bad Name"
        ]
      },
      "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [ 
          "1999", 
          "Little Red Corvette" 
        ]
      },
      "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
      },
      "5439": {
        "album": "ABBA Gold",
      },
      "2112": {
        
      }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));
  var count = 0;
  // Only change code below this line
  function updateRecords(id, prop, value) {

    // update artist or album info with value
    if (((prop == "artist") || (prop == "album")) && (value !== ""))
      collection[id][prop]=value;
    
    // for track updates
    if (prop == "tracks")
    {
      // verify tracks array property exists before adding tracks
      if (!collection[id].hasOwnProperty(prop))
        collection[id][prop] = [];
    
      // add a track to the array
      if (value !== "")
        collection[id][prop].push(value);
    }

    // remove properties who's value has been cleared
    if (value == "")
      delete collection[id][prop];
   
    return collection;
  }

  // Alter values below to test your code

  updateRecords(2112, "artist", "Rush");
  updateRecords(2112, "album", "Grace Under Pressure");
  updateRecords(2112, "tracks", "Distant Early Warning");
  updateRecords(2112, "tracks", "Afterimage");
  updateRecords(2112, "tracks", "Red Sector A");
  updateRecords(2112, "tracks", "The Enemy Within");
  updateRecords(2112, "tracks", "The Body Electric");
  updateRecords(2112, "tracks", "Kid Gloves");
  updateRecords(2112, "tracks", "Red Lenses");
  updateRecords(2112, "tracks", "Between the Wheels");

  console.log(collection);