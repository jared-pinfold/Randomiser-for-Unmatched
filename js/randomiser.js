/////////////////////////////////////////////
// Randomiser for the Unmatched board game //
/////////////////////////////////////////////

/// Declare global variables

  var setData = [{
    inUse: false,
    heroes: ["King Arthur", "Alice", "Medusa", "Sinbad"],
    boards: ["Sarpedon", "Marmoreal"]
  },
  {
    inUse: false,
    heroes: ["Bruce Lee"],
    boards: []
  },
  {
    inUse: false,
    heroes: ["Robin Hood", "Bigfoot"],
    boards: ["Sherwood Forest", "Yukon"]
  },
  {
    inUse: false,
    heroes: ["Muldoon", "Raptors"],
    boards: ["Raptor Paddock"]
  },
 {
    inUse: false,
    heroes: ["Buffy", "Spike", "Willow", "Angel"],
    boards: ["The Bronze", "Sunnydale High"]
  },
 {
    inUse: false,
    heroes: ["Dracula", "The Invisible Man", "Sherlock Holmes", "Jekyll & Hyde"],
    boards: ["Soho", "Baskerville Manor"]
  },
  {
    inUse: false,
    heroes: ["Beowulf", "Little Red Riding Hood"],
    boards: ["Heorot"]
  }]

  var availableHeroes = []
  var availableBoards = []

  /////// Functions
  
  function submit () {
    isChecked()
    setData.forEach (set => createArrays(set))
    if (availableBoards.length === 0) {
      alert("Bruce Lee expansion is not playable on its own")
    } else {
      console.log(" heroes " + availableHeroes)
      console.log(" boards " + availableBoards)
    }
  }
  
  function isChecked() {
    setData[0].inUse = document.getElementById("volOne").checked
    setData[1].inUse = document.getElementById("bruceLee").checked
    setData[2].inUse = document.getElementById("robinHood").checked
    setData[3].inUse = document.getElementById("raptors").checked
    setData[4].inUse = document.getElementById("buffy").checked
    setData[5].inUse = document.getElementById("cobbleAndFog").checked
    setData[6].inUse = document.getElementById("beowulf").checked
  }

  function createArrays (set) {
    if (set["inUse"] == true) {
      for (i = 0; i < set["heroes"].length; i++) {
       availableHeroes.push(set["heroes"][i])
      }
      for (i = 0; i < set["boards"].length; i++) {
        availableBoards.push(set["boards"][i])
      }
    }
  }
    

