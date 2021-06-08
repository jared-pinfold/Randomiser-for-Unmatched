/////////////////////////////////////////////
// Randomiser for the Unmatched board game //
/////////////////////////////////////////////

/// Declare global variables

  var setData = [{
    inUse: false,
    heroes: ["King Arthur", "Alice", "Medusa", "Sinbad"],
    boards2: ["Sarpedon", "Marmoreal"],
    boards4: ["Sarpedon", "Marmoreal"]
  },
  {
    inUse: false,
    heroes: ["Bruce Lee"],
    boards2: [],
    boards4: []
  },
  {
    inUse: false,
    heroes: ["Robin Hood", "Bigfoot"],
    boards2: ["Sherwood Forest", "Yukon"],
    boards4: []
  },
  {
    inUse: false,
    heroes: ["Muldoon", "Raptors"],
    boards2: ["Raptor Paddock"],
    boards4: []
  },
 {
    inUse: false,
    heroes: ["Buffy", "Spike", "Willow", "Angel"],
    boards2: ["The Bronze", "Sunnydale High"],
    boards4: ["The Bronze", "Sunnydale High"]
  },
 {
    inUse: false,
    heroes: ["Dracula", "The Invisible Man", "Sherlock Holmes", "Jekyll & Hyde"],
    boards2: ["Soho", "Baskerville Manor"],
    boards4: ["Soho", "Baskerville Manor"]
  },
  {
    inUse: false,
    heroes: ["Beowulf", "Little Red Riding Hood"],
    boards2: ["Heorot"],
    boards4: []
  },
  {
    inUse: false,
    heroes: ["Deadpool"],
    boards2: [],
    boards4: []
  }]

  var availableHeroes = []
  var availableBoards = []
  var players = 2
  var selectedBoard = ""
  var selectedPlayer = ["N/A", "N/A", "N/A", "N/A"]

  /////// Functions
  
  function submit () {
    availableHeroes = []
    availableBoards = []
    players = 2
    selectedPlayer = ["N/A", "N/A", "N/A", "N/A"]
    playerCount()
    isChecked()
    setData.forEach (set => createArrays(set))
    if (availableBoards.length === 0 || availableHeroes.length < players) {
      alert("The expansions you have selected don't have enough content to support the number of players you have selected")
      document.location.reload()
    } else {
      selectBoard()
      selectHeroes()
    }
    display("displayPlayer1", "Player 1: ", 0)
    display("displayPlayer2", "Player 2: ", 1)
    display("displayPlayer3", "Player 3: ", 2)
    display("displayPlayer4", "Player 4: ", 3)
    display("displayBoard", "Selected board: ", 0)
  }
  
  function display(htmlId, string, player) {
    if (string == "Selected board: ") {
      let x = document.getElementById(htmlId)
      x.innerHTML = selectedBoard
    }  else if (selectedPlayer[player] != "N/A") {
      let x = document.getElementById(htmlId)
      x.innerHTML = string + selectedPlayer[player]
    } else if (selectedPlayer[player] == "N/A") {
      let x = document.getElementById(htmlId)
      x.innerHTML = ""
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
    setData[7].inUse = document.getElementById("deadpool").checked
  }

  function createArrays (set) {
    if (set["inUse"] == true) {
      for (i = 0; i < set["heroes"].length; i++) {
       availableHeroes.push(set["heroes"][i])
      }
      if (players == 2) {
        for (i = 0; i < set["boards2"].length; i++) {
          availableBoards.push(set["boards2"][i])
        }
      } else {
        for (i = 0; i < set["boards4"].length; i++) {
          availableBoards.push(set["boards4"][i])
        }
      }
    }
  }

  function playerCount() {
    if (document.getElementById('twoPlayers').checked) {
      players = 2
    } else if (document.getElementById('threePlayers').checked) {
      players = 3
    } else {
      players = 4
    }
  }
  
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  }

  function selectBoard() {
    selectedBoard = availableBoards[randomRange(0, (availableBoards.length - 1))]
  }

  function selectHeroes() {
    for (i = 0; i < players; i++) {
      x = randomRange(0, (availableHeroes.length - 1))
      selectedPlayer[i] = availableHeroes[x]
      availableHeroes.splice(x,1) //Removes selected hero from available pool to avoid duplication
    }
  }
