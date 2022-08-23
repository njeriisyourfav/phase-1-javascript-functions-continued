// code your solution here
//function saturdayFun
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
//function mondayWork
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
//function wrapAdjective
let wrapAdjective = function(activity="*") {
  return function(adjective="special") {
    return `You are ${activity}${adjective}${activity}!`
  }
}