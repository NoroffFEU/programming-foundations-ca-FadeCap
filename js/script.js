const bottle = {
  brand: "Camelbak",
  maxVolume: 1000,
  minVolume: 0,
  currentVolume: 500,
  empty: false, 
  measurments: ["250ml", "500ml", "750ml", "1000ml"]
  toggleOpen: function() {
    bottle.open = !bottle.open
  }
}
