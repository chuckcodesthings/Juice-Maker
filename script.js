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
 const ui = {
  confirm: async (message) => createConfirm(message)
}

const createConfirm = (message) => {
  return new Promise((complete, failed)=>{
    $('#confirmMessage').text(message)

    $('#confirmYes').off('click');
    $('#confirmNo').off('click');
    
    $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
    $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
    
    $('.confirm').show();
  });
}
                     
const saveForm = async () => {
  const confirm = await ui.confirm('Are you sure you want to do this?');
  
  if(confirm){
    location.reload();
    return false;
  } else{
    alert('SMH, I expected more from you...');
  }
}

 const confirm = await ui.confirm('Would you like some more juice?');

  if(confirm){
    alert('yes clicked');
  } else{
    alert('no clicked');
  }

}, 75);


