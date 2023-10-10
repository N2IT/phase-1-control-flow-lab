function scuberGreetingForFeet(distance){
  // Write your code here!
  let sayWhat
  if (distance <= 400) {
    sayWhat = `This one is on me!`
  } else if (distance >= 400 && distance <= 2000) {
    sayWhat = `That will be twenty bucks.`
  } else if (distance >= 2000 && distance <= 2500) {
    sayWhat = `I will gladly take your thirty bucks.`
  } else if (distance > 2500) {
    sayWhat = `No can do.`
  } else {};

 return sayWhat;
}

function ternaryCheckCity(destination){
  // Write your code here!
  return (destination === "NYC") ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  }
}


