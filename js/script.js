// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-JS/sw.js", {
    scope: "/ICS2O-Unit6-04-JS/",
  })
}

window.onload = function () {
  // this calculates the volume of the sphere
  const params = new URLSearchParams(document.location.search)

  //input
  const radius = parseFloat(params.get("r"))

  //process
  const volume = (4 / 3) * Math.PI * radius ** 3

  //output
  document.getElementById("radius").innerHTML =
    "<h6>Radius = " + radius + "</h6)"
  document.getElementById("volume").innerHTML =
    "<h6>Volume is: " + volume.toFixed(2) + " cm³</h6>"
}
