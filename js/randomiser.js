
var volOne = {
  heroes: ["King Arthur", "Alice", "Medusa", "Sinbad"],
  boards: ["Sarpedon", "Marmoreal"]
}
var bruceLee = {
  inUse: false,
  heroes: ["Bruce Lee"],
  boards: []
}
var robinHood = {
  inUse: false,
  heroes: ["Robin Hood", "Bigfoot"],
  boards: ["Sherwood Forest", "Yukon"]
}
var inGenVsRaptors = {
  inUse: false,
  heroes: ["Muldoon", "Raptors"],
  boards: ["Raptor Paddock"]
}
var buffyTheVampireSlayer = {
  inUse: false,
  heroes: ["Buffy", "Spike", "Willow", "Angel"],
  boards: ["The Bronze", "Sunnydale High"]
}
var cobbleAndFog = {
  inUse: false,
  heroes: ["Dracula", "The Invisible Man", "Sherlock Holmes", "Jekyll & Hyde"],
  boards: ["Soho", "Baskerville Manor"]
}
var beowulf = {
  inUse: false,
  heroes: ["Beowulf", "Little Red Riding Hood"],
  boards: ["Heorot"]
}

function submit () {
  isChecked()
}

function isChecked() {
  volOne.inUse = document.getElementById("volOne").checked,
  bruceLee.inUse = document.getElementById("bruceLee").checked,
  robinHood.inUse = document.getElementById("robinHood").checked,
  inGenVsRaptors.inUse = document.getElementById("raptors").checked,
  buffyTheVampireSlayer.inUse = document.getElementById("buffy").checked,
  cobbleAndFog.inUse = document.getElementById("cobbleAndFog").checked,
  beowulf.inUse = document.getElementById("beowulf").checked,
  }

