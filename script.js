var diamond = $(".diamond")

function addDiamond() {
  diamond.append();
  console.log("addDiamond");
}



function addDiamondRandomly() {
  var position = Math.floor((Math.random() * 750) + 1);
  var size = Math.floor((Math.random() * 300) + 1);
  var time = 1500
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

addDiamondRandomly().preventDefault();
