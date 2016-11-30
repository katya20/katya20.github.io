var diamond = $(".diamond")

function addDiamond() {
  diamond.append();
  console.log("addDiamond");
}



function addDiamondRandomly() {
  var position = Math.floor((Math.random() * 2000) + 1);
  var size = Math.floor((Math.random() * 350) + 150);
  var time = 2000
  diamond.css("top", position)
  diamond.css('left', position)
  diamond.css('position', "absolute")
  addDiamond();
  diamond.animate({"font-size": size}, {
    complete: function() {
      diamond.animate({"font-size": "0px"},{duration: time, complete: addDiamondRandomly})
    },
    duration: time  
  })
}

addDiamondRandomly();
