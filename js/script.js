// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use-strict"

/**
 * This function calculates area of a triangle.
 */

function checkEligibility() {
  const userAge = parseInt(document.getElementById("user-Age").value)
  const day = parseInt(document.getElementById("day").value)
  const option2 = parseInt(document.getElementById("option-2").checked)
  const option5 = parseInt(document.getElementById("option-5").checked)

  if ((day == option2 || day == option5) || userAge >= 12 && userAge <= 21){
     document.getElementById("museum-decision").innerHTML = "You can get discount."

  }else if (day == option2 || day == option5){
      document.getElementById("museum-decision").innerHTML = 'You can get discount.'
     
  } else {
    document.getElementById("museum-decision").innerHTML = 'You must pay regular price.'
  }
}