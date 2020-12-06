function juiceMaker(){
let apples = prompt(`Enter number of apples`)
let oranges = prompt(`Enter amount of oranges`);
}

document.getElementById("demo").innerHTML = juicemaker();

if (apples > oranges && oranges == 0) {
  window.alert(`You made apple juice!`);
} else if (apples > 0 && oranges == 0) {
  window.alert(`You made apple-orange juice!`);
} else if (apples == 0 && oranges > 0) {
  window.alert(`You made orange juice!`);
} else {
  window.alert(`Congrats, you made nothing!`);
}
