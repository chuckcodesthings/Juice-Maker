setTimeout(function () {

  let apples = prompt(`Enter number of apples`);
  let oranges = prompt(`Enter amount of oranges`);
  let cum = prompt(`Enter amount of cum in liters`);

  apples > oranges && oranges == 0 && cum == 0
    ? window.alert(`You made apple juice!`)
    : apples > 0 && oranges >= 0 && cum == 0
    ? window.alert(`You made apple-orange juice!`)
    : apples == 0 && oranges > 0 && cum == 0
    ? window.alert(`You made orange juice!`)
    : apples > oranges && oranges == 0 && cum > 0
    ? window.alert(`You made apple juice, but it strangely tastes like the milk your uncle gives you when you visit him...`)
    : apples > 0 && oranges > 0 && cum > 0
    ? window.alert(`You made apple-orange juice, but it has a noticeable cum aftertaste!`)
    : apples == 0 && oranges > 0 && cum > 0)
    ? window.alert(`You mixed semen with orange juice, go to hell!`)
    : apples == 0 && oranges == 0 && cum > 0)
    ? window.alert(`You made a delicious glass of cum`)
    : window.alert(`Congrats, you made nothing!`);
  
  let makeMoreJuice = window.prompt(`Would you like to make more juice?`);
    : makeMoreJuice = true
    ? location.reload();
    : window.alert(`I thought you were more thirsty...`);
 
}, 75);


