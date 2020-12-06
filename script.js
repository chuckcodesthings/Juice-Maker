'use strict'
setTimeout(function () {

  let apples = prompt(`Enter number of apples`);
  let oranges = prompt(`Enter amount of oranges`);
  let cum = prompt(`Enter amount of cum in liters`);


  if (apples > oranges && oranges == 0 && cum == 0) {
    window.alert(`You made apple juice!`);
  } else if (apples > 0 && oranges >= 0 && cum == 0) {
    window.alert(`You made apple-orange juice!`);
  } else if (apples == 0 && oranges > 0 && cum == 0) {
    window.alert(`You made orange juice!`);
  } else if (apples > oranges && oranges == 0 && cum > 0) {
    window.alert(`You made apple juice, but it strangely tastes like the milk your uncle gives you when you visit him!`);
  } else if (apples > 0 && oranges > 0 && cum > 0) {
    window.alert(`You made apple-orange juice, but it has a noticeable cum aftertaste!`);
  } else if (apples == 0 && oranges > 0 && cum > 0) {
    window.alert(`You mixed semen with orange juice, go to hell!`);
  } else if (apples == 0 && oranges == 0 && cum > 0) {
    window.alert(`You made a delicious glass of cum`);
  } else {
    window.alert(`Congrats, you made nothing!`);
  }
  
  let answer = window.confirm("Save data?");
if (answer) {
    location.reload();
}
else {
   return;
}

}, 75);


